import { postsModel } from "../models/posts.model.js";

const read = async (req, res) => {
  try {
    const posts = await postsModel.findAll();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener los posts" });
  }
};

const readById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postsModel.findById(id);
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener el post" });
  }
};

const create = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    if (!titulo?.trim() || !img?.trim() || !descripcion?.trim()) {
      return res
        .status(400)
        .json({ ok: false, message: "Todos los campos son obligatorios" });
    }
    const newPost = await postsModel.createPost({ titulo, img, descripcion });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ ok: false, message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const post = await postsModel.update({
      id,
      titulo,
      img,
      descripcion,
      likes,
    });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar el post" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postsModel.deletePost(id);
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al eliminar el post" });
  }
};

export const postsController = { read, readById, create, update, remove };
