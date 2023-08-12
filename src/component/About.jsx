import React from 'react'
import Header from './Header'
import {FaUserTie} from "react-icons/fa";
import Footer from './Footer';

const About = () => {

  return (
   <div>
    <div className="bg-white  p-4  max-w-5xl mx-auto">
      <Header/>
      <div className="  rounded-xl mx-auto mt-8 opacity-60 space-y-4 bg-green-500 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10 bg-slate-300 rounded-2xl p-5">Who We are</h1>
        <img
        className="opacity-30 w-[500px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className=''>
      <div className=" max-w-xl bg-white grounded-md shadow-md mx-auto mt-20 rounded-md
       items-center justify-center space-y-6 ">
        <div className=" py-2 space-y-10 text-center ">
        
        <h1 className="text-xl font-bold  p-2 rounded-lg">Why This Project</h1>
   
      <p className="text-black text-left px-2 text-lg">
      This project was made by a team of students who graduated from frontend web development at Gabi School.
       This project was a test of what we have learned. This project is built with react and tailwindcss.
      </p>               
     </div>

      </div>
      <div className=" max-w-xl bg-white grounded-md shadow-md mx-auto mt-20 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center ">
        
        <h1 className="text-xl font-bold  p-2 rounded-lg">How this Project Works</h1>
   
      <p className="text-black text-left px-2 text-lg">
         This project works as an online school, where both teachers and students can register.
         The teacher has the ability to create a new class and modify it as well as delete it.
         A student has the ability to join any class he wants to be a part of that class.
      </p>
                
     </div>

      </div>

      <div className=" max-w-xl bg-white grounded-md shadow-md mx-auto mt-20 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center ">
        
      <h1 className="text-xl font-bold p-2 rounded-lg">Thanks Giving</h1>
   
      <p className="text-black text-left px-2 text-lg">
      First of all, thanks to Allah, then we thank Gabi School and our teacher Duran Ali, 
      who was really the reason for us to come here and build this very beautiful project.
      </p>
      <img
        className="opacity-40 w-[550px] h-full  object-cover rounded-lg mb-4 md:ml-4"
        src='/src/assets/ud.PNG'
        alt=""
      />
                
     </div>

      </div>

      <div className=" max-w-lg bg-white grounded-md shadow-md mx-auto mt-10 rounded-md
       items-center justify-center space-y-6 pb-4">

        <div className=" py-2 space-y-10 text-center p-2 ">
        
        <h1 className="text-xl font-bold  p-2 rounded-lg">Our Team</h1>
   
      <p className="text-black text-left px-2 text-lg">
      This project was built together by all the students pictured below.
      </p>
      <div className='grid grid-cols-3 space-y-5'>

        <div className='flex flex-col items-center justify-center space-y-4 mt-6'> 
        <img
        className=" w-20 h-full  object-cover rounded-lg mb-4"
        src='/src/assets/ibr.JPEG'
        alt=""
      />
              
          <p className='font-bold'>Ibrahim Husseim</p>

        </div>
        <div className='flex flex-col items-center justify-center space-y-4'> 
        <img
        className=" w-20 h-full  object-cover rounded-lg mb-4"
        src='/src/assets/moh.JPEG'
        alt=""
      />
          <p className='font-bold'>Mohamed Abdullahi</p>

        </div>
        <div className='flex flex-col items-center justify-center space-y-9 md:space-y-2'> 
        <img
        className=" w-20 h-full  object-cover rounded-lg mb-4"
        src='/src/assets/shak.JPEG'
        alt=""
      />
          <p className='font-bold'>Abdishakur</p>

        </div>
        <div className='flex flex-col items-center justify-center space-y-4'> 
        <FaUserTie className='w-24 h-24 border border-solid p-2'/>
        {/* <img
        className=" w-20 h-full  object-cover rounded-lg mb-4"
        src=''
        alt="" */}
    
          <p className='font-bold'>Ali Omar</p>

        </div>
        <div className='flex flex-col items-center justify-center space-y-4'> 
        <FaUserTie className='w-24 h-24 border border-solid p-2'/>
        {/* <img
        className=" w-20 h-full  object-cover rounded-lg mb-4"
        src=''
        alt=""
      /> */}
          <p className='font-bold'>Hassan</p>

        </div>
        <div className='flex flex-col items-center justify-center space-y-4'> 
        <FaUserTie className='w-24 h-24 border border-solid p-2'/>
       
          <p className='font-bold'>AbdiKani</p>

        </div>
        
      </div>
                
     </div>

      </div>
      </div>
      
      </div>
      <Footer/>
      </div>
      

  )
}

export default About