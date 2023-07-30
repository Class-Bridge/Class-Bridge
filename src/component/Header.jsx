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
    
    <div className='flex justify-between items-center p-2 bg-gray-200 w-full '>

<Link to ='#' ><div className='ml-[80px] p-2'>
   <span className='bg-red-500 p-2 rounded-full font-semibold text-white px-3'>0</span></div></Link>


    <div className='mr-20'>
      
{user &&
<>
     
     <Link to ='addClass'  className='p-2 text-yellow-700 font-semibold'> Add Class</Link>
     <Link to ='user/profile' className='p-2 text-yellow-700 font-semibold '> Profile</Link >
     {/* //<Link onClick={handleLogout}className='p-2 text-yellow-700 font-semibold'>Logout</Link> */}
     {/* <Link to ='/'  className='p-2 text-yellow-700 font-semibold'>Login </Link> */}
     
     <Link onClick={handleLogout}className='p-2 text-yellow-700 font-semibold'>Logout</Link>
     </>
}
      </div>
    </div>
  )
}

export default Header