import React from 'react'

const Conversation = () => {
  return (
  <>
<div className='flex gap-2 items-center hover:bg-pink-500 rounded p-2 py-1 cursor-pointer'>
    <div className='relative'>
    <div className='w-12 rounded-full'>
      <img src='https://avatar.iran.liara.run/public/boy?username=laufey' alt='user avaTAR' />
    </div>
    <span className='absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></span>
  </div>
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between '>
        <p className='font-bold text-gray-50'> jhon doe</p>
        <span className='text-xl'>😞

        </span>
      </div>

    </div>
    </div>
    <div className='divider my-0 py-0 h-1' />
  </>
  )
}

export default Conversation


/*
starter code for the file
import React from 'react'

const Conversation = () => {
  return (
  <>
<div className='flex gap-2 items-center hover:bg-pink-500 rounded p-2 py-1 cursor-pointer'>
    <div className='relative'>
    <div className='w-12 rounded-full'>
      <img src='https://avatar.iran.liara.run/public/boy?username=laufey' alt='user avaTAR' />
    </div>
    <span className='absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></span>
  </div>
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between '>
        <p className='font-bold text-gray-50'> jhon doe</p>
        <span className='text-xl'>😞

        </span>
      </div>

    </div>
    </div>
    <div className='divider my-0 py-0 h-1' />
  </>
  )
}

export default Conversation
*/