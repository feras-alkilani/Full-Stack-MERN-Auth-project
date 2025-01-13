import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// Import routes
router.get("/", test);

export default router;
