import { Router } from "express";
import { login, signUp } from "../controllers/authController.js";

const router = Router()

// use verifyJWT middleware
// router.use()

router.route("/login").post(login)
router.route("/signup").post(signUp)


export default router