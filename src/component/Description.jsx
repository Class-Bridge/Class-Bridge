import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { useGetClassesQuery, useRequestClassMutation }  from "../store/api/ClassSlice";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Description () {

    const params = useParams();
 const [requestClass] = useRequestClassMutation();
  const { data: classes = [] } = useGetClassesQuery();
   const [course, setCourse] = useState()
   const [title, setTitle] = useState()
   const [des, setDes] = useState()
   const [img, setImg] = useState()

   const navigate = useNavigate();
    
    useEffect(() => {
      const course = classes?.find((course) => course.id === Number(params.id));
      
        setTitle(course.title);
        setDes(course.description)
        setImg(course.image)

        setCourse(course)
    
    }, [classes, params.id]);

    const handleRequest = () => {
   requestClass({class_id: Number(params.id),
    requestedClass: course
  })
  .unwrap()
      .then(() => {
        navigate("/student/dashpord");
      }
    )
    }

  return (
    <div className="bg-white  p-4  max-w-5xl mx-auto">
      <Header/>
      <div className="  rounded-xl mx-auto mt-8 opacity-60 space-y-4 bg-green-500 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">{title}</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src={img}
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
        src={img}
        alt=""
      />
      <p className="text-black text-left px-2 text-lg">{des}</p>
            <button onClick={handleRequest}
              className="items-center txet-lx font-medium text-black text-center mr-4 bg-green-400 p-2 rounded-md w-full"  
            >
            Continue Learning
            </button>
            
</div>

      </div>
      <Footer/>
    </div>
  );
}

export default Description;
