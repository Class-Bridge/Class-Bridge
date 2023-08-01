import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import {  useDeleteClassMutation }  from "../store/api/ClassSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";



function CourseCard({ imageSrc, title, description, courseId}) {

  const [deleteClass] = useDeleteClassMutation();
 

  const handleDelete = (class_id) => {

  console.log(courseId);

  deleteClass(class_id);
  }
  
   

 
  return (
    <div className="bg-white rounded-lg shadow-md p-3 ">
      {/* {classes.map((course) =>  ( */}
<>
<div className="items-center justify-center ml-10 md:ml-1">
      <img
        className="w-56 h-32  rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlYXJuaW5nJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt={title}
      />
      <Link to={`/class/${courseId}`}>
      <h1 className="text-black font-bold mb-2">{title}</h1>
      </Link>
      </div>
      {/* <p className="text-gray-500">{description}</p> */}
      <div className="flex items-center mt-4">
        
        <div className="flex-1 ml-4">
          <div className="flex items-center justify-around">
            <button
              className="flex items-center text-gray-800 mr-4"
              onClick={() => handleDelete(courseId)}
            >
              <FontAwesomeIcon icon={faTrash} className="ml-3 text-xl" />
            
            </button>

            <Link to={`/edit/${courseId}`}>
            <button
              className="flex items-center  text-gray-800"
              
            >
              <FontAwesomeIcon icon={faEdit} className="mr-5 text-xl" />
          
            </button>
            </Link>
          </div>
        </div>
      </div>
      </>
      {/* // ))} */}
    </div>
  );
}

export default CourseCard;
