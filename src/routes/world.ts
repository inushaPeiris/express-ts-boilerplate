import express from "express";

const router = express.Router();

router.get("/", ()=> console.log("GET /world"));

export default router;
