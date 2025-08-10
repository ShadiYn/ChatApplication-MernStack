import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/auth.routes.js";
import messagesRoutes from "./Routes/messages.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/user.routes.js";


const PORT = process.env.PORT || 5000;
const app = express(); 

dotenv.config();
app.use(express.json()); // Middleware to parse json (from req.body)
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes);  
app.use("/api/messages", messagesRoutes );  
app.use("/api/users", userRoutes );  



//rutas
//app.get("/", (req,res) =>{
  //ruta raiz
  //res.send("route working!!");
    
//});





app.listen(PORT, () => {
  connectMongoDB();
  console.log(`server is running on port ${PORT}`);
});



