import express from "express";

import { getUserController, createUserController } from "../controller/userController";

const router = express.Router();

router.get("/", getUserController);
router.post("/", createUserController);

export default router;
