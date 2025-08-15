import React from 'react'
import GendercheckBox from './generCheckbox'
const signUp = () => {
  return (
    <div className='flex flex-column items-center justify-center min-y-96 mx-auto'>
     <div className='w-full p-6 rounded-lg shadow-lg  bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opaciyty-0'>

      <h1 className= 'text-3xl font-semibold text-center text-white'>Signup
          <span className= 'text-pink-800'> FlowerIse</span>
        </h1> 

        <form>
        <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>first name</span>
            </label>
            <input type="text" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

              <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>last name</span>
            </label>
            <input type="text" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

              <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>password</span>
            </label>
            <input type="password" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

               <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

          <div><p></p> <br>
          </br></div>
          <GendercheckBox></GendercheckBox>
          {/*Gender checkbox here*/ }

           <a href='#' className='text-sm hover:underline hover:text-pink-950 mt-2 inline-block text-white'>
              {
                "Alreadt have an account? Log In"
              }
            </a>

            <div>
              
              <button className='btn btn-block btn-sm btn-soft bg-pink-800  hover:bg-pink-950 text-white'>
            aignup
              </button>
            </div>


        </form>

     </div>
    </div>
  )
}

export default signUp


/*
STARTER CODE SIGNUP COMPONENT
import React from 'react'
import GendercheckBox from './generCheckbox'
const signUp = () => {
  return (
    <div className='flex flex-column items-center justify-center min-y-96 mx-auto'>
     <div className='w-full p-6 rounded-lg shadow-lg  bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opaciyty-0'>

      <h1 className= 'text-3xl font-semibold text-center text-white'>Signup
          <span className= 'text-pink-800'> FlowerIse</span>
        </h1> 

        <form>
        <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>first name</span>
            </label>
            <input type="text" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

              <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>last name</span>
            </label>
            <input type="text" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

              <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>password</span>
            </label>
            <input type="password" placeholder="Enter your first name" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

               <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>

          <div><p></p> <br>
          </br></div>
          <GendercheckBox></GendercheckBox>
         

           <a href='#' className='text-sm hover:underline hover:text-pink-950 mt-2 inline-block text-white'>
              {
                "Alreadt have an account? Log In"
              }
            </a>

            <div>
              
              <button className='btn btn-block btn-sm btn-soft bg-pink-800  hover:bg-pink-950 text-white'>
            aignup
              </button>
            </div>


        </form>

     </div>
    </div>
  )
}

export default signUp


*/

