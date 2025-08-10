import User from "../models/user.model.js";
export const getUserForSideBar =  async (req, res) => {
  try{
    const loggedInUserId = req.user._id;
    //fetch users from database
    const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");//buscar todos los usuarios excepto el usuario que está logueado, menos mostrar la contraseña
    res.status(200).json(filteredUsers); //respondemos con los usuarios filtrados


  }catch(error){
    console.log("error in getUserForSideBar controller:", error);
    res.status(500).json({error: "internal server error"});
  }
};