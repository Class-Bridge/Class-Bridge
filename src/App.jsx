import { useEffect, useState } from 'react'
import Login from './component/user/Login'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Cookies from 'js-cookie'
import SignUp from './component/user/SignUp'

function App() {

const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {

      setUser(token)  
    }
  }, [user]);

  // if(!user)return<div><Login/> <TsignUp/></div>


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
            <Route path="/home" element={<Home/>} />
            {/* <Route path="/user/profile" element={<Profile/>} /> */}
            <Route path="/teacher/login/register" element={<SignUp/>} />
            <Route path="/" element={<Login />} />
          
          </Routes>
            
          
     
        </div>
        </div>
        </div>
      
    </>
  )
}

export default App
