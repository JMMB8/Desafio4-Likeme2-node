import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import postsRouter from "./routes/post.routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/posts", postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});

