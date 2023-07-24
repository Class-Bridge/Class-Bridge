import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserInfo(token);
    }
  }, [userInfo]);

  console.log(userInfo);


  const handleLogout = () => {
    try {
      Cookies.remove('token');
      setUserInfo(null);
      window.location.reload();
      navigate('/user/login');
    } catch (error) {
      console.log('Logout error:', error);
      // Handle error case if needed
    }
  };

  return (
    
    <div className='flex justify-end items-center p-2 bg-gray-200 w-full '>
    <div className='mr-20'>

      <Link to ='/' className='p-2 text-yellow-700 font-semibold'> Home</Link >
     <Link to ='addClass'  className='p-2 text-yellow-700 font-semibold'> Add Class</Link>
     <Link to ='user/profile' className='p-2 text-yellow-700 font-semibold '> Profile</Link >
     {/* //<Link onClick={handleLogout}className='p-2 text-yellow-700 font-semibold'>Logout</Link> */}
     <Link to ='user/login'  className='p-2 text-yellow-700 font-semibold'>Login </Link>
     <Link onClick={handleLogout}className='p-2 text-yellow-700 font-semibold'>Logout</Link>

      </div>
    </div>
  )
}

export default Header