import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// Get All Posts
router.get("/", getAllPosts);
// Get /:slug
router.get("/:slug", getSinglePost);
// Create post
router.post("/", createPost);
// Delete Post
router.delete("/:id", deletePost);

export default router;
