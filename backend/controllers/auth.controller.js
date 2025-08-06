import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
//auth routes controller
export const loginUser = (req, res) => {
  console.log("login user");  // Logic for user login
}

export const logoutUser = (req, res) => {
  console.log("logout user");  // Logic for user logout
}

export const signUpUser = async(req, res) => {
   // Logic for user sign up  
    try{
      const {firstName, lastName, userName, Password, ConfirmPassword, gender} = req.body;
      if(Password !== ConfirmPassword){
        return res.status(400).json({message: "Passwords do not match"});
      }
      const user = await User.findOne({userName});
      if(user){
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
       await newUser.save() //save it a la base de datos.
      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: newUser.userName,   
        profilePicture: newUser.profilePicture
      })


    } catch (error) {
  console.error("Error en signUpUser:", error); // <-- cambia esto
  res.status(500).json({ error: "Internal server error" });
}

  
  
  } 