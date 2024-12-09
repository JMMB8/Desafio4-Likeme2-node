import { Pool } from "../database/conection.js";

const findAll = async () => {
  const { rows } = await Pool.query("SELECT * FROM posts");

  return rows;
};

const findById = async (id) => {
  const { rows } = await Pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return rows[0];
};

const createPost = async (post) => {
  const query =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3,$4)RETURNING *";

  const { rows } = await Pool.query(query, [
    post.titulo,
    post.img,
    post.descripcion,
    post.likes,
  ]);
  return rows[0];
};
const updatePost = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const { rows } = await Pool.query(query, [id]);
  return rows[0];
};

const deletePost = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const { rows } = await Pool.query(query, [id]);
  return rows[0];
};

export const postsModel = {
  findAll,
  findById,
  createPost,
  updatePost,
  deletePost,
};
