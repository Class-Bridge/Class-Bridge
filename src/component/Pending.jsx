import React, { useEffect, useState } from 'react'
import Header from './Header'
import {AiOutlineCheck} from "react-icons/ai";

import { useApproveClassMutation, useGetStudentRequestQuery } from '../store/api/ClassSlice';
import { Link, useNavigate } from 'react-router-dom';

const Pending = () => {

  const { data: requests = [] } = useGetStudentRequestQuery();
  const [ approveClass  ] = useApproveClassMutation()
  const navigate = useNavigate();

useEffect(() => {

  const approvedClass = requests.filter ((approved) => approved.request_id !== requests.request_id)

  console.log(approvedClass.request_id);
}, [requests]);




 

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto h-full">
      <Header/>
      <div className="  mt-8 space-y-4 bg-green-300 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">Student Request</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className=' my-20 max-w-4xl items-center justify-center md:max-w-6xl space-y-6 '>

<div className='flex flex-col items-center justify-center space-y-10'>

    <div className=' flex  space-x-7 underline md:space-x-20 '>
     <h1 className='text-lg font-bold'>First Name</h1> 
     <h1 className='text-lg font-bold'>Lasst Name</h1>
     <h1 className='text-lg font-bold'>Class Name</h1>
     <h1 className='text-lg font-bold'>Approve</h1>
    </div>

    {requests.map(request =>
    <div className='flex space-x-8 md:space-x-24 md:ml-10 border border-solid '>
    <p className='text-lg text-blue-600 font-medium md:p-2 px-1'>{request.first_name}</p>
    <p className='text-lg text-blue-600 font-medium md:p-2'>{request.last_name}</p>
    <p className='text-lg text-blue-600 font-medium md:p-2'>{request.class_title}</p>
    <Link to={`/teacher/approve/${request.request_id}`} className='mt-1 px-1 md:px-2'>
    <AiOutlineCheck className ="w-16 h-8 ml-8  bg-green-500 p-1 rounded-md text-white
         hover:text-green-500 hover:bg-red-200"
       
         />
         </Link>
    </div>
    )
}

    </div>

        </div>
    </div>
  )
};

export default Pending