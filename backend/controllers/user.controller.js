import User from "../models/user.model.js";

export const getUserSavedPost = async (req, res) => {
  const clerkId = req.auth.userId;

  if (!clerkId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({
    clerkUserId: clerkId,
  });

  return res.status(200).json(user.savedPost);
};

export const savePost = async (req, res) => {
  const clerkId = req.auth.userId;
  const postId = req.body.postId;

  if (!clerkId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({
    clerkUserId: clerkId,
  });

  const isSaved = user.savedPost.some((p) => p === postId);

  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPost: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPost: postId },
    });
  }

  res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};
