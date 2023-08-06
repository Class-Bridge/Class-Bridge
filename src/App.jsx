import { useEffect, useState } from "react";
import Login from "./component/user/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cookies from "js-cookie";
import SignUp from "./component/user/SignUp";
import AddClass from "./component/AddClass";
import EditClass from "./component/EditClass";
import Profile from "./component/user/Tprofile";
import Tprofile from "./component/user/Tprofile";
import Sprofile from "./component/user/Sprofile";
import Description from "./component/Description";
import Footer from "./component/Footer";
import About from "./component/About";
import Pending from "./component/Pending";
import Dashpord from "./component/StudentDashpord";
import StudentDashpord from "./component/StudentDashpord";
import TeacherDashpord from "./component/TeacherDashpord";
import PrivateRoute from "./PrivateRouter";
import MyClasses from "./component/MyClasses";
import Contact from "./component/Contact";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser(token);
    }
  }, [user]);

  // if(!user)return<div><Login/> <TsignUp/></div>

  return (
    <>
    <div className=" space-y-24">         
 <Routes>
 <Route element={<PrivateRoute/>}>   
              <Route path="/addClass" element={<AddClass />} />
              <Route path="/edit/:id" element={<EditClass />} />
              <Route path="/pending" element={<Pending/>} />
              <Route path="student/dashpord" element={<StudentDashpord/>} />
              <Route path="teacher/dashpord" element={<TeacherDashpord/>} />
              <Route path="/class/:id" element={<Description/>} />
              <Route path="/teacher/profile" element={<Tprofile />} />
              <Route path="/student/profile" element={<Sprofile />} />
              <Route path="/student/classes" element={<MyClasses />} />
</Route>

              <Route path="/" element={<Home />} />
              <Route path="/teacher/profile" element={<Tprofile />} />
              <Route path="/student/profile" element={<Sprofile />} />
              <Route path="/teacher/login/register" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
                 
</Routes>
  </div> 
   <div>
     <Footer />
   </div>
   </>
  );
}

export default App;
