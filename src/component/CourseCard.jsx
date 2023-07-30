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
    <div className="bg-white  rounded-lg shadow-md p-4 w-full">
      {/* {classes.map((course) =>  ( */}
<>
      <img
        className="w-full h-32 object-cover rounded-lg mb-4"
        src={imageSrc}
        alt={title}
      />
      <h1 className="text-black font-bold mb-2">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div className="flex items-center mt-4">
        
        <div className="flex-1 ml-4">
          <div className="flex">
            <button
              className="flex items-center text-gray-600 mr-4"
              onClick={() => handleDelete(courseId)}
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
            
            </button>

            <Link to={`/edit/${courseId}`}>
            <button
              className="flex items-center text-gray-600"
              
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
          
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
