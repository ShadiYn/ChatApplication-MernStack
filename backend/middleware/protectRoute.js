import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; 
const protectRoute = async (req, res, next) => {

  try{
    //lo que hace se verifica si el usuario esta autenticado
    const token = req.cookies.token; //obtenemos el token del cookie
    //si el token no existe o no hay token no esta autorizado
    if(!token){
      return res.status(401).json({message: "Unauthorized, please login first - No token provided"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); //verificamos el token con la clave secreta, [le tenemos que pasar la clave secreta que tenemos en el .env, y si el token es valido, nos devuelve el id del usuario, si no, nos devuelve un error]
    if(!decoded){
      return res.status(401).json({message: "Unauthorizeds - Invalid token"});
    }

    const user = await User.findById(decoded.userId).select("-password"); //buscamos el usuario en la base de datos con el id que nos devolvió el token
    if(!user){
      return res.status(404).json({message: "User not found"});
    }

  req.user = user;
 //agregamos el id del usuario a la request para que lo podamos usar en el controlador
    next();

  }catch(error){
    console.log("error en protect middelware:", error);
    res.status(500).json({error: "Internal server error"});

  }
}

export default protectRoute;