import { useGetTeacherQuery } from "../../store/api/UserSlice";
import Header from "../Header";

const Tprofile = () => {
  const { data: teacher = {} } = useGetTeacherQuery();

  console.log(teacher);

  return (
    <div className="items-center justify-center rounded-lg ">
      <Header/>
      <div className="  mt-8 space-y-4 bg-green-600 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10">User Info</h1>
        <img
        className="opacity-30 w-[600px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className="max-w-md text-left  md:ml-96 rounded-lg mt-20 mb-20 bg-green-100 p-10 shadow-lg  lg:w-[100/%]">
        <h4 className="mb-10 text-2xl font-bold">Profile</h4>
        <p className="mb-10 text-2xl"> First Name: {teacher.first_name}</p>
        <p className="mb-10 text-2xl"> Last Name: {teacher.last_name} </p>
        <p className="mb-10 text-2xl">Email: {teacher.email} </p>
      </div>
    </div>
  );
};

export default Tprofile;