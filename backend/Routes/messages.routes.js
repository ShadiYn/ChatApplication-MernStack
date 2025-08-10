import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js'; // Middleware to protect routes
import {getMessages} from '../controllers/message.controller.js'; // Import getMessages function

const router = express.Router();
router.get("/:id", protectRoute, getMessages); // obtener mensajes por el id del usuario
//lo que hace el middleware protectRoute es que verifica si el usuario está autenticado
router.post("/send/:id", protectRoute , sendMessage); // Function to send a message 

export default router;