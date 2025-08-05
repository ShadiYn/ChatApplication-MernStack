import express from "express";
import dotenv from "dotenv";
const app = express(); 
import authRoutes from "./Routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
//rutas
app.get("/", (req,res) =>{
  //ruta raiz
  res.send("route working!!");
    
});

app.use("/api/auth", authRoutes);  




app.listen(PORT, () => {
  connectMongoDB();
  console.log(`server is running on port ${PORT}`);
});



