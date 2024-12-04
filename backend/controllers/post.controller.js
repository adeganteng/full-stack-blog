import Posts from "../models/post.model.js";

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
  const newPost = await Posts(req.body);

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Posts.findByIdAndDelete(req.params.id);
  res.status(200).json("Post has been deleted");
};
