import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js'; // Middleware to protect routes

const router = express.Router();

//lo que hace el middleware protectRoute es que verifica si el usuario está autenticado
router.post("/send/:id", protectRoute , sendMessage); // Function to send a message 

export default router;