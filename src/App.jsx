import { useState } from 'react'
import Login from './component/user/Login'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import SignUp from './component/user/SignUp'

function App() {


  return (
    <>
       <div className= "min-h-screen flex bg-gray-100">
      <div className="w-full">
        <div className="flex flex-col items-center">
        <Header/>
          <h3 className="text-3xl text-white mb-5 mt-5"> Classridge</h3>
        
          <Routes>
          

            
            {/* <Route path="/addClass" element={<Add Class/>} /> */}
         
           
            {/* <Route path="/edit/:id" element={<EditClass />} />            */}
            <Route path="/user/login" element={<Login />} />
            {/* <Route path="/classes" element={<Classes />} /> */}
            {/* <Route path="/user/profile" element={<Profile/>} /> */}
            <Route path="/user/login/register" element={<SignUp/>} />
          
          
          </Routes>
            
          
     
        </div>
        </div>
        </div>
      
    </>
  )
}

export default App
