import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
      <input
  type='text'
  className='border border-white border-[1px] text-sm rounded-md w-full p-2.5 bg-transparent text-white placeholder:text-white focus:outline-none'
  placeholder='send a message'
/>
        <button type='submit' className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center'>
          <IoSend size={24} />
        </button>
      </div>
    </form>
  )
}

export default MessageInput


/*
starter code

import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
      <input
  type='text'
  className='border border-white border-[1px] text-sm rounded-md w-full p-2.5 bg-transparent text-white placeholder:text-white focus:outline-none'
  placeholder='send a message'
/>
        <button type='submit' className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center'>
          <IoSend size={24} />
        </button>
      </div>
    </form>
  )
}

export default MessageInput

*/