import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { connectDB } from "./lib/connectDB.js";

const app = express();
app.use("/webhooks", webhookRouter);
app.use(express.json());

// app.get("/test", (req, res) => {
//   res.status(200).json({ message: "Hello World" });
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error Handling

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log(`Server running on port http://localhost:3000`);
});
