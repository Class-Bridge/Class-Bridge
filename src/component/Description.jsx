import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { useGetClassesQuery }  from "../store/api/ClassSlice";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";


function Description () {

    const params = useParams();

    const { data: classes = [] } = useGetClassesQuery();
   

   const [title, setTitle] = useState()
   const [des, setDes] = useState()
  
   console.log(title);
   console.log(des);
    
    useEffect(() => {
      const course = classes?.find((course) => course.id === Number(params.id));
      
        setTitle(course.title);
        setDes(course.description)
    
    }, [classes, params.id]);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mx-auto">
      <Header/>
      <div className="  mt-8 space-y-4 bg-green-600 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">{title}</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className=" max-w-lg bg-white grounded-md shadow-md mx-auto mt-10 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center ">
        
        <h1 className="text-xl font-bold">Class Description</h1>
    <img
        className="w-64 ml-12 md:ml-[120px] object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlYXJuaW5nJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      <p className="text-black text-left px-2 text-lg">{des}</p>
            <button
              className="items-center txet-lx font-medium text-black text-center mr-4 bg-green-400 p-2 rounded-md w-full"  
            >
            Continue Learning
            </button>
            
</div>

      </div>
    </div>
  );
}

export default Description;
