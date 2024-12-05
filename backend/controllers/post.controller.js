import ImageKit from "imagekit";
import Posts from "../models/post.model.js";
import User from "../models/user.model.js";

export const getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await Posts.find()
    .populate("user", "username")
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
