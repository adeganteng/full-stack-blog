import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// Upload image route
router.get("/upload-auth", uploadAuth);

// Get All Posts
router.get("/", getAllPosts);
// Get /:slug
router.get("/:slug", getSinglePost);
// Create post
router.post("/", createPost);
// Delete Post
router.delete("/:id", deletePost);
// Featured post
router.patch("/feature", featurePost);

export default router;
