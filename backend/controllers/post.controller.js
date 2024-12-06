import ImageKit from "imagekit";
import Posts from "../models/post.model.js";
import User from "../models/user.model.js";

export const getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const query = {};

  const cat = req.query.cat;
  const author = req.query.author;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;
  const featured = req.query.featured;

  if (cat) {
    query.category = cat;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");
    if (!user) {
      return res.status(404).json("User not found!");
    }
    query.user = user._id;
  }

  let sortObj = { createdAt: -1 };

  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;
      case "oldest":
        sortObj = { createdAt: 1 };
        break;
      case "popular":
        sortObj = { visit: -1 };
        break;
      case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        };
        break;
      default:
        break;
    }
  }

  const posts = await Posts.find(query)
    .populate("user", "username")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Posts.countDocuments();
  const hasMore = page * limit < totalPosts;

  return res.status(200).send({ posts, hasMore });
};

export const getSinglePost = async (req, res) => {
  const post = await Posts.findOne({
    slug: req.params.slug,
  }).populate("user", "username img");

  return res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }
  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json("User not found!");
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Posts.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Posts.findOne({ slug });
    counter++;
  }

  const newPost = await Posts({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Posts.findOneAndDelete(req.params.id);
    return res.status(200).json("Post has been deleted");
  }

  const user = await User.findOne({ clerkUserId });

  const deletePost = await Posts.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletePost) {
    return res.status(403).json("You can deleted only your post");
  }

  res.status(200).json("Post has been deleted");
};

export const uploadAuth = async (req, res) => {
  const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY,
  });

  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

export const featurePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role !== "admin") {
    return res.status(403).json("You cannot feature post");
  }

  const post = await Posts.findById(postId);

  if (!post) {
    return res.status(404).json("Post not found");
  }

  const isFeatured = post.isFeatured;

  const updatedPost = await Posts.findByIdAndUpdate(
    postId,
    {
      isFeatured: !isFeatured,
    },
    { new: true }
  );

  res.status(200).json(updatedPost);
};
