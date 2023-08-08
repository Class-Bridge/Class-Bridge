import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import {  useDeleteClassMutation, useGetClassesQuery }  from "../store/api/ClassSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useGetTeacherQuery } from "../store/api/UserSlice";

function CourseCard({ image, title, description, courseId}) {

  const { data: classes = [] } = useGetClassesQuery();
  const { data: teacher = {}, error = {} } = useGetTeacherQuery();



  const [user, setUser] = useState(null);

  const [access, setAccess] = useState()
  const navigate = useNavigate();
 

  useEffect(() => {

    const token = Cookies.get("token");
    if (token) {
      setUser(token);
    }
  }, [user]);

  const [deleteClass] = useDeleteClassMutation();
 

  const handleDelete = (class_id) => {

  console.log(courseId);

  deleteClass(class_id);
  } 

  useEffect(() => {
  classes?.map((course) => {

    if(teacher.id  === course.teacher_id){
      setAccess()
  }
  })
  }, [classes]);

  
 
   

 
  return (
    <div className="bg-white rounded-lg shadow-md p-3 ">
      
<>
<div className="items-center justify-center ml-10 md:ml-1">
      <img
        className="w-56 h-32  rounded-lg mb-4"
        src={image}
      />
      <Link to={`/class/${courseId}`}>
      <h1 className="text-black font-bold mb-2">{title}</h1>
      </Link>
      </div>
      {/* <p className="text-gray-500">{description}</p> */}
      <div className="flex items-center mt-4">
        
        <div className="flex-1 ml-4">

{user &&
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
}

        </div>
      </div>
      </>
    </div>
  );
}

export default CourseCard;
