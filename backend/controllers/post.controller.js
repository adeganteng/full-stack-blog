import Posts from "../models/post.model.js";
import User from "../models/user.model.js";

export const getAllPosts = async (req, res) => {
  const posts = await Posts.find();

  return res.status(200).send(posts);
};

export const getSinglePost = async (req, res) => {
  const post = await Posts.findOne({
    slug: req.params.slug,
  });

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

  const newPost = await Posts({ user: user._id, ...req.body });

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const post = await Posts.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  res.status(200).json("Post has been deleted");
};
