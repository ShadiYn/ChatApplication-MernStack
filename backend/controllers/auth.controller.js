import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCokkie from "../utils/generateToken.js";
//auth routes controller
export const loginUser = async (req, res) => {
  console.log("login user");  
    // Logic for user login
    try{
      const {userName, Password} = req.body;
      //check if the user exists
      const userExist = await User.findOne({userName});
      const isPasswordValid = await bcrypt.compare(Password, userExist?.password || "");
      if(!userExist || !isPasswordValid){
        return res.status(400).json({message: "invalid username or password, try again"});

      }
      generateTokenAndSetCokkie(userExist._id, res);
      res.status(200).json({
        _id: userExist._id,
        firstName: userExist.firstName,
        lastName: userExist.lastName,
        userName: userExist.userName,
        profilePicture: userExist.profilePicture
      });

    }catch(error){
      console.log("error en el controlador de login:", error);
      res.status(500).json({error:"internal server error"});
    }
}

export const logoutUser =  (req, res) => {
  console.log("logout user");  
  // Logic for user logout
  try{
    // Clear the token cookie, hará que el usuario le quites el token y cierre la sesión
  //res.cookie("token","", {maxAge:0}); //esto es para eliminar el token del navegador
  res.cookie("token","", {maxAge:0});

  // limpiar la informacion del usuario de la sesión
  res.status(500).json({message: "user logged out correctly"});

  }catch(error){
    console.log("error en el controlador d elogout:",error);
    res.status(400).json({error:"internal server error"});
  }
}

export const signUpUser = async(req, res) => {
   // Logic for user sign up  
    try{
      const {firstName, lastName, userName, Password, ConfirmPassword, gender} = req.body;
      if(Password !== ConfirmPassword){
        return res.status(400).json({message: "Passwords do not match"});
      }
      const userExist = await User.findOne({userName});
      if(userExist){
        return res.status(400).json({message:"this username already exists"});
      }
      
      //avatar placeholder: https://avatar-placeholder.iran.liara.run/document
      const boyPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

      const girlPic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const fullName = `${firstName} ${lastName}`;
    const otherPic = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(fullName)}`;




      //take the password and hash it here
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);

      //crear nuevo usuario y guardalo en la base de datos
      const  newUser = new  User({
        firstName,
        lastName,
        userName,
        password: hashedPassword,
        gender,
        profilePicture: gender === "Male" ? boyPic : gender === "Female" ? girlPic : otherPic
      })

      if(newUser){
        //generate JWT TOKEN
        generateTokenAndSetCokkie(newUser._id, res);

        //GUARDAR EL nuevo usuario
        await newUser.save(); //save it to the database
        res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: newUser.userName,   
        profilePicture: newUser.profilePicture
      });

      }else{
        res.status(400).json({message:"invalid user data"})
      }
    


    } catch (error) {
  console.error("Error en signUpUser:", error); // <-- cambia esto
  res.status(500).json({ error: "Internal server error" });
}

  
  
  } 