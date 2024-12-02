import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import { connectDB } from "./lib/connectDB.js";

const app = express();

// app.get("/test", (req, res) => {
//   res.status(200).json({ message: "Hello World" });
// });

app.use("/users", userRouter);
app.use("/users", postRouter);
app.use("/users", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log(`Server running on port http://localhost:3000`);
});
