import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='flex justify-end items-center p-2 bg-gray-200 w-full '>
    <div className='mr-20'>

      <Link to ='/' className='p-2 text-yellow-700 font-semibold'> Home</Link >
     <Link to ='addClass'  className='p-2 text-yellow-700 font-semibold'> Add Class</Link>
     <Link to ='user/profile' className='p-2 text-yellow-700 font-semibold '> Profile</Link >
     {/* //<Link onClick={handleLogout}className='p-2 text-yellow-700 font-semibold'>Logout</Link> */}
     <Link to ='user/login'  className='p-2 text-yellow-700 font-semibold'>Login </Link>

      </div>
    </div>
  )
}

export default Header