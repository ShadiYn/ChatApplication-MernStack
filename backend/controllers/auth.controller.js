
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
      const {fullName, UserName, Password, ConfirmPassword, gender} = req.body;
    }
    catch(error){

    }
  
  
  } 