import express from "express";

// Controllers
import { login, signup, getUsers } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/users", getUsers)

export default router;
