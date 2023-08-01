import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto">
      <Header/>
      <div className="  mt-8 space-y-4 bg-green-600 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">Who We are</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className=" max-w-xl bg-white grounded-md shadow-md mx-auto mt-10 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center ">
        
        <h1 className="text-xl font-bold bg-green-500 p-2 rounded-lg">Interoduction</h1>
   
      <p className="text-black text-left px-2 text-lg">
      When we started ClassBridge to give Students from all across the world the ability to learn the skills they’d need to succeed in this modern century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped hundreds of Somali people worldwide unlock modern technical skills and reach their full potential through code. There are two commitments we've made to the world. We've been grounded by these since day one: Increase access to high-quality
       education for everyone, everywhere; Enhance teaching and learning online through research.
      </p>
                
     </div>

      </div>
      <div className=" max-w-lg bg-white grounded-md shadow-md mx-auto mt-10 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center ">
        
        <h1 className="text-xl font-bold bg-green-500 p-2 rounded-lg">Our Goal</h1>
   
      <p className="text-black text-left px-2 text-lg">
      We want to create a world where anyone can build something meaningful with technology, and everyone has the 
      learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity 
      and drive to learn. At ClassBridge, we are dedicated to empowering all people, regardless of where
       they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.
      </p>
                
     </div>

      </div>
      </div>
      

  )
}

export default About