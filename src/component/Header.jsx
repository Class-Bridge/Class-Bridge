import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

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


    <div className ='ml-14 md:mr-20-'>
<>
     <Link to ='/'  className='p-2 text-black font-semibold'>Home</Link>
     <Link to ='/about' className='p-2 text-black font-semibold '>About</Link >
     <Link to ='/contact' className='p-2 text-black font-semibold '>Contact</Link >
  
     {/* <Link to ='/'  className='p-2 text-yellow-700 font-semibold'>Login </Link> */}
     
     <Link to='/Login' onClick={handleLogout}className='p-2 text-black font-semibold'>Logout</Link>
     </>

      </div>
      </div>
   
  )
}

export default Header