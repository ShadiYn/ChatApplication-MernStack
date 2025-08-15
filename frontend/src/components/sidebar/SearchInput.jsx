import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
    <input
  type="text"
  placeholder="Search"
  className="input rounded-md bg-transparent text-white border-none placeholder:text-white focus:outline-none"
/>
   <button
  type="submit"
  className="btn btn-circle bg-transparent text-pink-700 border-none shadow-none"
>
  <IoMdSearch size={24} />
</button>
    </form>
  )
}

export default SearchInput



/*
  starter code for the file
import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-pink-500 text-white"
      >
        <IoMdSearch />
      </button>
    </form>
  )
}

export default SearchInput
*/