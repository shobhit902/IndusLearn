import express from "express";
import {
  signUp,
  login,
  logout,
  getProfile,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Sample route for user registration

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/get-profile", getProfile);

export default router;
