import { postsController } from "../controllers/post.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", postsController.read);
router.get("/:id", postsController.readById);
router.post("/", postsController.create);
router.put("/like/:id", postsController.update);
router.delete("/:id", postsController.remove);

export default router;
