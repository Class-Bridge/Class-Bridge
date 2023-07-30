import { useGetTeacherQuery } from "../../store/api/UserSlice";

const Tprofile = () => {
  const { data: teacher = {} } = useGetTeacherQuery();

  console.log(teacher);

  return (
    <div className=" flex flex-row justify-center rounded-lg bg-gray-200 lg:w-1/2">
      <div className="mx-auto rounded-lg mt-20 mb-20 bg-white p-10 shadow  lg:w-[100/%]">
        <h4 className="mb-10 text-2xl font-bold">Profile</h4>
        <p className="mb-10 text-2xl"> First Name: {teacher.first_name}</p>
        <p className="mb-10 text-2xl"> Last Name: {teacher.last_name} </p>
        <p className="mb-10 text-2xl">Email: {teacher.email} </p>
      </div>
    </div>
  );
};

export default Tprofile;
