import React from 'react'
import Header from './Header'

const Pending = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto h-full">
      <Header/>
      <div className="  mt-8 space-y-4 bg-green-600 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">Student Request</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className=' my-20 flex max-w-sm items-center justify-center md:max-w-6xl '>
        <table className='table border-collapse  border border-slate-400 md:w-2xl '>
            <tr className='px-5'>
                <th className='text-sm md:text-lg border border-slate-300 md:px-10' >First Name</th>
                <th className='text-sm md:text-lg border border-slate-300 md:px-10'>Last Name</th>
                <th className='text-sm md:text-lg border border-slate-300 md:px-10'>Class Name</th>
                <th className='text-sm md:text-lg border border-slate-300 md:px-10'>Approve</th>
            </tr>
            <td className='border border-slate-300 md:px-3'>Ibrahim</td>
            <td className='border border-slate-300 md:px-3'>Hussein</td>
            <td className='text-sm md:text-lg border border-slate-300 md:px-3'>React master Class</td>
            <td className='border border-slate-300 text-blue-500 cursor-pointer md:px-3'>Approve</td>

        </table>
        </div>
    </div>
  )
}

export default Pending