import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'
import { useGetStudentQuery, useGetTeacherQuery } from "../store/api/UserSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
const Header = () => {


  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { data: teacher = {} } = useGetTeacherQuery();
  const { data: student = {} } = useGetStudentQuery();



  const studentObj = Object.keys(student).length !== 0
  const teacherObj = Object.keys(teacher).length !== 0

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUser(token);
    }
  }, [user]);

 


  const handleLogout = () => {
    try {
      Cookies.remove('token');
      setUser(null);
      navigate('/');
      window.location.reload();
      
    } catch (error) {
      console.log('Logout error:', error);
      // Handle error case if needed
    }
  };

  return (
    
  <div className='justify-center md:flex md:justify-around md:items-center md:p-2  md:w-full '>

<Link to ='#' ><div className='ml-[60px] md:ml-0 p-2'>
  <h1 className='font-bold text-3xl  bg-yellow-300 p-2 px-5 mr-20 rounded-2xl'>ClassBridge</h1>
   </div></Link>


    <div className ='ml-14 md:mr-20 flex items-center justify-center'>
<>
     <Link to ='/'  className='p-2 text-black font-semibold'>Home</Link>
     <Link to ='/about' className='p-2 text-black font-semibold '>About</Link >
     <Link to ='/contact' className='p-2 text-black font-semibold '>Contact</Link >
  
  {user &&
     <Link to='/Login' onClick={handleLogout}className='p-2 text-black font-semibold'>Logout</Link>

  }
  {!user &&
    <Link to='/Login' className='p-2 text-black font-semibold'>Login</Link>
  }
  <div className="ml-4 md:ml-10">
  { teacherObj &&
     <Link to ='/teacher/dashpord'  className='p-2 text-black font-semibold text-center bg-gray-300 
     rounded-full '>
      <FontAwesomeIcon icon={faUser} className=" w-6 h-6  text-green-500" />
      </Link>
  }
  { studentObj &&
     <Link to ='/student/dashpord'  className='p-2 text-black font-semibold bg-gray-300  rounded-full'>
      <FontAwesomeIcon icon={faUser} className=" w-6 h-6  text-green-500" />
      </Link>
  }
  </div>
     </>

      </div>
      </div>
   
  )
}

export default Header