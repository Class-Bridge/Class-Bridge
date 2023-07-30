import { useGetStudentQuery, useGetTeacherQuery } from "../../store/api/UserSlice";

const Sprofile = () => {
  const { data: student = {} } = useGetStudentQuery();



  return (
    <div className=" flex flex-row justify-center rounded-lg bg-gray-200 lg:w-1/2">
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
