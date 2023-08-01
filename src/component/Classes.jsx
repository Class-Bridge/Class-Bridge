import React from "react";
import { useGetClassesQuery } from "../store/api/ClassSlice";
import CourseCard from "./CourseCard";

// const courses = [
//   {
//     id: 1,
//     imageSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-inXkQ7HVMkfb61qOR1gMPiRt7RKTQIdILA&usqp=CAU",
//     title: "Course 1",
//     description: "This is the first course",
//     progress: 50,
//   },
//   {
//     id: 2,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 3,
//     imageSrc:
//       "data:image/png;base64,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",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 4,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 5,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 6,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 7,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 8,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 9,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 10,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 11,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 12,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 13,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 14,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 15,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 16,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 17,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 18,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
//   {
//     id: 19,
//     imageSrc:
//       "https://www.uplers.com/wp-content/uploads/2022/09/11-1-scaled.jpg",
//     title: "Course 2",
//     description: "This is the second course",
//     progress: 75,
//   },
// Add more courses as needed
//];

function Courses() {
  const { data: classes = [] } = useGetClassesQuery();
  console.log(classes);

  console.log("classes", classes);

  return (
    <div className="p-4 flex-1 overflow-y-auto justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {classes?.map((course) => (
          <div key={course.id} className=" p-2 items-center justify-center">
            <CourseCard
              imageSrc={course.imageSrc}
              title={course.title}
              description={course.description}
              progress={course.progress}
              key={course.id}
              courseId={course.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Courses;
