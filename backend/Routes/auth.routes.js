import express from "express";
import { loginUser, logoutUser, signUpUser } from "../controllers/auth.controller.js";

const router = express.Router();

//login route
router.post("/login", loginUser );

//signup route
router.post("/signUp", signUpUser);

//logout route
router.post("/logout", logoutUser );


export default router;