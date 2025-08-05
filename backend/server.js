const express  = require ("express");

const app = express(); 

//rutas
app.get("/", (req,res) =>{
  //ruta raiz
  res.send("route working!!!");
    
});

app.get("/pagina1", (req,res) =>{
  res.send("pagina! unooo");
})

app.listen(5000, () => console.log("server runing on port 5000"));



