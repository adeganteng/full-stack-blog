import { Webhook } from "svix";
import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import CommentSchema from "../models/comment.model.js";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return res.status(500).json({ message: "Webhook secret is missing" });
  }

  const payload = req.body;
  const headers = req.headers;

  const webhook = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = webhook.verify(payload, headers);
  } catch (err) {
    console.error("Webhook verification failed:", err.message);
    return res.status(400).json({
      message: "Webhook verification failed",
    });
  }

  if (evt.type === "user.created") {
    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_image_url,
    });

    await newUser.save();
  }

  if (evt.type === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id,
    });

    await Post.deleteMany({ user: deletedUser._id });
    await CommentSchema.deleteMany({ user: deletedUser._id });
  }

  return res.status(200).json({
    message: "Webhook received",
  });
};
