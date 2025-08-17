import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login.jsx'
import SignUp from './pages/signup/signUp.jsx'
import HomePage from './pages/home/home.jsx'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <div className= 'p-4 h-screen flex items-center justify-center'>
     <Routes>
      
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
      

     </Routes>
     <Toaster/>
      
    </div>
    </>
  )
}

export default App
