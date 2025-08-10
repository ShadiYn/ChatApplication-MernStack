import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
export const sendMessage = async (req, res) => {
  //console.log("Message sent:", req.params.id);
  try{
    const {message} = req.body; //el mensaje que se enviará
    const {id:reciverId} = req.params; // id de la persona que recibe el mensaje
    const senderId = req.user.id; // id del usuario que envía el mensaje, viene del middleware de autenticación
   
    let conversation = await Conversation.findOne({
      participants: {$all: [senderId, reciverId]} //buscamos la conversación entre el usuario que envía y el que recibe el mensaje
    })

    if(!conversation){
      conversation = await Conversation.create({
        participants: [senderId, reciverId] //si no existe la conversación, la creamos
      });
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    })

    if(newMessage){
      conversation.messages.push(newMessage._id);
      console.log("enviado el mensaje");
    }

    //SOCKET IO FUNCIONALIDAD, PARA HACERLO EN TIEMPO REAL

 // await conversation.save(); //guardamos la conversación actualizada
 // await newMessage.save(); //guardamos el nuevo mensaje
            //si se guarda la conversacion y mensaje por separado, puede ser ineficiente, por eso usamos Promise.all
                //para guardar ambos en paralelo y mejorar el rendimiento


await Promise.all([conversation.save(), newMessage.save()]); //guardamos ambos en paralelo para mejorar el rendimiento
  
    res.status(200).json(newMessage); //respondemos con el mensaje enviado

  }catch(error){
    console.log("error en message controller:", error);
    res.status(500).json({error: "internal server error"});
  }


} ;

export const getMessages = async (req,res) => {
  try{
    const {id:userToChatWith}=req.params;  //id del usuario con el que se quiere chatear
  
    const senderId = req.user._id; //id del usuario que envía el mensaje, viene del middlew
    const conversation = await Conversation.findOne({
      participants : {$all: [senderId, userToChatWith]}
    }).populate("messages") //buscamos la conversación entre el usuario que envía y el que recibe el mensaje, no es una referencia sino el mensaje actual
    const messages = conversation.messages
    if(!conversation) return res.status(200).json([]); //si no existe la conversación, devolvemos un array vacío
    res.status(200).json(messages);
  
  
  
  }catch(error){
    console.log("error in getMessages controller:", error);
    res.status(500).json({error: "internal server error"});
  }
}