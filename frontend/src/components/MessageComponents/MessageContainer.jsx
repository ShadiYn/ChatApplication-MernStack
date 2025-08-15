import React from 'react'
import Messages from './Messages'  
import MessageInput from './MessageInput'    
import { LuMessageSquareText } from "react-icons/lu";

const MessageContainer = () => {
  const nochatselected= false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {nochatselected ? <NochatSelected/>: (
         <>
          {/*Header*/}
         <div className='bg-white/40 px-4 py-2 mb-2'>
            <span className='label-text text-slate-900 font-bold'>To:
            </span>
            <span className='text-pink-950 font-bold'> Jhon Doe
            </span>
          </div>
          <Messages/>
          <MessageInput/>
          
      </>
      )}
     
      
    </div>
  )
}

export default MessageContainer

const NochatSelected = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
        <p>Welcome ✋ Jhon Doe</p>
        <p>Select a chat to start messaging</p>
        <LuMessageSquareText size={40} />
      </div>
    </div>
  )
}


/* starter code

import React from 'react'
import Messages from './Messages'  
import MessageInput from './MessageInput'       
const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
         
         <div className='bg-white/40 px-4 py-2 mb-2'>
            <span className='label-text text-slate-900 font-bold'>To:

            </span>
            <span className='text-pink-950 font-bold'> Jhon Doe

            </span>
          </div>

          
          <Messages/>

         
          <MessageInput/>
          
      </>
      
    </div>
  )
}

export default MessageContainer
*/