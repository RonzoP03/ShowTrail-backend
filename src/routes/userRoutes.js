import express from "express";
import {
  authUser,
  registerUser
} from "../controllers/userController.js";
const router = express.Router();

router.route("/users/register").post(registerUser);
router.route("/users/login").post(authUser);

export default router;
