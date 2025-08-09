import mongoose from 'mongoose';
import moongose from 'mongoose';
import { time } from 'three/tsl';

const conversationSchema = new moongose.Schema({
  participants:[
    {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    
   }
],
  messages: [{
    type: moongose.Schema.Types.ObjectId,
    ref: "Message",
    default: [],
  }
]

}, {timestamps:true});


const conversation = mongoose.model("Conversation", conversationSchema);
export default conversation;