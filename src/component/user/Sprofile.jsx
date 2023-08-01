import { useGetStudentQuery, useGetTeacherQuery } from "../../store/api/UserSlice";
import Header from "../Header";

const Sprofile = () => {
  const { data: student = {} } = useGetStudentQuery();



  return (
    <div className="  justify-center rounded-lg bg-gray-200 lg:w-1/2">
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
      <div className="mx-auto rounded-lg mt-20 mb-20 bg-white p-10 shadow  lg:w-[100/%]">
        <h4 className="mb-10 text-2xl font-bold">Profile</h4>
        <p className="mb-10 text-2xl"> First Name: {student.first_name}</p>
        <p className="mb-10 text-2xl"> Last Name: {student.last_name} </p>
        <p className="mb-10 text-2xl">Email: {student.email} </p>
      </div>
    </div>
  );
};

export default Sprofile;
