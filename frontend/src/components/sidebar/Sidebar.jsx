import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-x-slate-100 p-4 flex flex-col'>
      <SearchInput></SearchInput>
      <div className='divider px-3'></div>
      <Conversations></Conversations>
      <LogOutButton></LogOutButton>
      {/**<Conversations></Conversations>
      <LogOutButton></LogOutButton>*/}
    </div>
  )
}

export default Sidebar


/*
STARTER CODE FOR THE FILE
import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-x-slate-100 p-4 flex flex-col'>
      <SearchInput></SearchInput>
      <div className='divider px-3'></div>
      <Conversations></Conversations>
      <LogOutButton></LogOutButton>
      
    </div>
  )
}

export default Sidebar
*/