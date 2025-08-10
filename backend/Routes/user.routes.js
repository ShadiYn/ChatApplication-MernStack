import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUserForSideBar } from '../controllers/user.controller.js'; 

const router = express.Router();

router.get("/",protectRoute, getUserForSideBar); // Route to get user data for the sidebar

export default router;