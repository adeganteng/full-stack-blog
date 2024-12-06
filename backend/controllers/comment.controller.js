import Comments from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
  const comments = await Comments.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  return res.status(200).json(comments);
};

export const addComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated");

  const user = await User.findOne({ clerkUserId });

  const newComment = new Comments({
    ...req.body,
    user: user._id,
    post: postId,
  });

  const savedComment = await newComment.save();

  setTimeout(() => {
    return res.status(201).json(savedComment);
  }, 3000);
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.id;

  if (!clerkUserId) return res.status(401).json("Not Authenticated");

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Comments.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deletedComment) {
    return res.status(403).json("You can delete only your commnet!");
  }

  return res.status(200).json("Comment delete successfully");
};
