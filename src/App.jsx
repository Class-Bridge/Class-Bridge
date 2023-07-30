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
 <Routes>
              <Route path="/addClass" element={<AddClass />} />
              <Route path="/edit/:id" element={<EditClass />} />
              <Route path="/home" element={<Home />} />
              <Route path="/teacher/profile" element={<Tprofile />} />
              <Route path="/student/profile" element={<Sprofile />} />
              <Route path="/teacher/login/register" element={<SignUp />} />
              <Route path="/" element={<Login />} />
            </Routes>
        
    </>
  );
}

export default App;
