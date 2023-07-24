import { useState } from 'react'
import Login from './component/user/Login'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import TsignUp from './component/user/TsignUp'
import SsignUp from './component/user/SsignUp'
import Home from './component/Home'

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
         
           
            {/* <Route path="/edit/:id" element={<EditClass />} />*/}
            <Route path="/user/login" element={<Login />} />
            <Route path="/" element={<Home/>} />
            {/* <Route path="/user/profile" element={<Profile/>} /> */}
            <Route path="/teacher/login/register" element={<TsignUp/>} />
            <Route path="/student/login/register" element={<SsignUp/>} />
          
          
          </Routes>
            
          
     
        </div>
        </div>
        </div>
      
    </>
  )
}

export default App
