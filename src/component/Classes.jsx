import React from "react";
import { useGetClassesQuery } from "../store/api/ClassSlice";
import CourseCard from "./CourseCard";


function Courses( props) {
  const { data: classes = [] } = useGetClassesQuery();
  
  const currentTeacher = classes.filter(clas =>{
return clas.teacher_id === props.teacher.id
  })
  

  return (
    <div className="p-4 flex-1 overflow-y-auto justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid lg:grid-cols-4  ">
        {currentTeacher?.map((course) => (
          <div key={course.id} className=" p-2 items-center justify-center">
            <CourseCard
              imageSrc={course.imageSrc}
              title={course.title}
              description={course.description}
              progress={course.progress}
              key={course.id}
              courseId={course.id}
              image={course.image}
            />
          </div>
        ))}
        
      </div>
    </div>
  );
}
export default Courses;
