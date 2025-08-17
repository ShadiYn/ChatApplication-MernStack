import { Link } from 'react-router-dom'
const login = () => {
  return (
    <div className= 'flex flex-col items-center justify-cente min-w-96 mx-auto'>
      <div className= 'w-full p-6 round-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className= 'text-3xl font-semibold text-center text-white'>Login
          <span className= 'text-pink-800'> FlowerIse</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder="Enter your username" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>
          <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10 bg-transparent"/>
          <div>

            <Link to='/signup' className='text-sm hover:underline hover:text-pink-950 mt-2 inline-block text-white'>
              {
                "Don't have an account? Sing Up"
              }
            </Link>
            <div>
              <button className='btn btn-block btn-sm btn-soft bg-pink-800  hover:bg-pink-950 text-white'>
                Log In
              </button>
            </div>

          </div>
        </form>
      </div>
      
    </div>
  )
}

export default login


//starter code for this file
//const login = () => {
 /* return (
    <div className= 'flex flex-col items-center justify-cente min-w-96 mx-auto'>
      <div className= 'w-full p-6 round-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className= 'text-3xl font-semibold text-center text-white'>Login
          <span className= 'text-pink-800'> FlowerIse</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder="Enter your username" className="w-full input input-bordered h-10 bg-transparent"/>
          

          </div>
          <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10 bg-transparent"/>
          <div>

            <a href='#' className='text-sm hover:underline hover:text-pink-950 mt-2 inline-block text-white'>
              {
                "Don't have an account? Sing Up"
              }
            </a>
            <div>
              <button className='btn btn-block btn-sm btn-soft bg-pink-800  hover:bg-pink-950 text-white'>
                Log In
              </button>
            </div>

          </div>
        </form>
      </div>
      
    </div>
  )
}

export default login
*/