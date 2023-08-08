import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import {  useDeleteClassMutation }  from "../store/api/ClassSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";



function MyClass ({ image, title, description, courseId}) {

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
        src={image}
        alt={title}
      />
      
      <h1 className="text-black font-bold mb-2">{title}</h1>
     
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="flex items-center mt-4">
        
        <div className="flex-1 ml-4">
          <div className="flex items-center justify-around">
            
          </div>
        </div>
      </div>
      </>
      {/* // ))} */}
    </div>
  );
}

export default MyClass;
