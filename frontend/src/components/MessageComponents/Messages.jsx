import React from 'react'
import Message from './Message'
import {useEffect, useRef} from 'react'
const Messages = () => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messageEndRef]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
        <Message/>
      <Message/>
      <Message/>
      <Message/>
     <Message/>
      <Message/>
      <Message/>
      <Message/>
        <Message/>
      <Message/>
      <Message/>
      <Message/>
    <div ref={messageEndRef}>

    </div>
      
    </div>
  )
}

export default Messages


/* starter code
import React from 'react'
import Message from './Message'
const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
        <Message/>
      <Message/>
      <Message/>
      <Message/>
     <Message/>
      <Message/>
      <Message/>
      <Message/>
        <Message/>
      <Message/>
      <Message/>
      <Message/>

      
    </div>
  )
}

export default Messages
*/