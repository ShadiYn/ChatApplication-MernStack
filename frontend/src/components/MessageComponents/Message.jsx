import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
   <div className='w-10 rounded-full'>
  <img src='https://avatar.iran.liara.run/public/boy?username=laufey' alt='user avaTAR' />
</div>

      </div>
      <div className={'chat-bubble text-black bg-white bg-opacity-40'}> Hi wassup my boy

      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
          17:00
      </div>
      
    </div>
  )
}

export default Message


/*starter code

import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
   <div className='w-10 rounded-full'>
  <img src='https://avatar.iran.liara.run/public/boy?username=laufey' alt='user avaTAR' />
</div>

      </div>
      <div className={'chat-bubble text-white bg-pink-700'}> Hi wassup my boy

      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
          17:00
      </div>
      
    </div>
  )
}

export default Message
*/