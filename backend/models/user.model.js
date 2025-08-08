//fullname, username, gender,password
import e from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  userName:{
    type:String,
    required:true,
    unique:true,
  },
  gender:{
    type: String,
    required: true,
    enum:['Male','Female', 'Other'],
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
   profilePicture: { // <-- corregido
    type: String,
    default: "",
  }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;