import React from 'react'
import Header from './Header'
import { useGetStudentClassesQuery } from '../store/api/ClassSlice'
import MyClass from './myClass'




const MyClasses = () => {


  
  const { data: myClasses = [] } = useGetStudentClassesQuery()
  
  console.log(myClasses);


  return (
    <div className="bg-white  p-4  max-w-5xl mx-auto">
      <Header/>
      <div className="  rounded-xl mx-auto mt-8 opacity-60 space-y-4 bg-green-500 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10 bg-slate-300 rounded-2xl p-5">My Classes</h1>
        <img
        className="opacity-30 w-[500px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>
      <div className="p-4 flex-1 overflow-y-auto justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {myClasses?.map((myClass) => (
          <div key={myClass.id} className=" p-2 items-center justify-center">
            <MyClass
              image={myClass.image}
              title={myClass.title}
              description={myClass.description}
              key={myClass.id}
            />
          </div>
        ))}
      </div>
    </div>
      </div>
      

  )
}

export default MyClasses