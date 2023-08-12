import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faChevronLeft,
  faEnvelope,
  faBell,
  faComment,
  faSchoolFlag,
  faBookOpen,
  faUserGroup,
  faNoteSticky,
  faCheck,
  faPlay,
  faCog,
  faSignOutAlt,
  faHome,
  faPlus,
  faUser,
  faAddressCard,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import Sclasses from "./Sclasses";
// import { courses } from "./Courses";
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useGetStudentQuery, useGetTeacherQuery } from "../store/api/UserSlice";
import Footer from "./Footer";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

 
  const { data: teacher = {} } = useGetTeacherQuery();
  const { data: student = {} } = useGetStudentQuery();



  const studentObj = Object.keys(student).length !== 0
  const teacherObj = Object.keys(teacher).length !== 0
  

 

  const [user, setUser] = useState(null);
 
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser(token);
    }
  }, [user]);

  const handleLogout = () => {
    try {
      Cookies.remove("token");
      setUser(null);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("Logout error:", error);
      // Handle error case if needed
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const isSmallScreen = window.innerWidth < 768;

  const closeSidebarOverlay = () => {
    if (isSmallScreen && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  // // State for pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const coursesPerPage = 6; // Number of courses to show per page
  // const totalCourses = courses.length;
  // const totalPages = Math.ceil(totalCourses / coursesPerPage);
  // const indexOfLastCourse = currentPage * coursesPerPage;
  // const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  // const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // // Handler for changing page
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // Toggle search input visibility on small screens
  const toggleSearchInput = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    
    <div className="flex h-screen ">
      {/* Left Sidebar Overlay */}
      {isSidebarOpen && isSmallScreen && (
        <div
          className="fixed z-40  bg-black opacity-50"
          onClick={closeSidebarOverlay}
        ></div>
      )}

      {/* Left Sidebar */}

      <aside
        className={`bg-gray-800 text-white w-64 h-screen flex flex-col md:h-screen  ${
          isSidebarOpen || !isSmallScreen ? "" : "hidden"
        } md:flex`}
      >
    
       
         
        <div className="bg-gray-100 opacity-50 rounded-3xl flex items-center m-4 justify-center h-14">
          <div className="flex flex-col mr-3">
            <h1 className="text-black text-2xl font-bold cursor-pointer hover:text-blue-500">ClassBridge</h1>
          </div>
        </div>
        
        
        <nav className="mt-14 mx-4 ">
          <ul className="space-y-4">
            <li>
          <Link to ='/'className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full"> 
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home</Link >
          </li>
          <li>
          <Link to ='/about'className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full"> 
          <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
          About</Link >
          </li>

          <li>
          <Link to ='/contact'className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full"> 
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contact</Link >
          </li>

            <li className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full">
            <Link to ='/upcoming'>
              <FontAwesomeIcon icon={faSchoolFlag} className="mr-2" />
              Upcoming Classes
              </Link>
            </li>

            {/* <li className="hover:bg-gray-100 px-4 hover:text-black py-2 rounded-full">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Grades
            </li> */}
      {teacherObj &&
            <li className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full">
            <Link to ='/teacher/dashpord'>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Teacher
              </Link>
            </li>
}       {studentObj &&
            <li className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full">
            <Link to ='/student/dashpord'>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Student
              </Link>
            </li>
}
          </ul>
        </nav>
        <div className="mt-auto mx-4 mb-14">
          <div className="w-full h-0.5 bg-white"></div>
          <ul className="space-y-4">
            <li className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-full flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              <span>Settings</span>
            </li>
           
            <li className="">
            <Link onClick={handleLogout}className="hover:bg-gray-100 hover:text-black
               px-4 py-2 rounded-full flex items-center">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout</Link>
              </li>
          </ul>
        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col  ">
        <header className="bg-gray-800 shadow-header  flex items-center py-3" >
          <div className=" flex md:mx-auto">

          <button
            className="md:hidden text-white focus:outline-none ml-3"
            onClick={handleSidebarToggle}
          >
            {isSidebarOpen ? (
              <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            )}
          </button>
          <h1 className="text-2xl text-white font-bold hidden md:block md:mr-8 ">
            {isSmallScreen ? "" : "Overview"}
          </h1>

          {isSearchOpen || !isSmallScreen ? (
            <div className="relative">

              <input
                type="text"
                placeholder="Search..."
                className={`rounded-full py-1 pl-10 pr-12 outline-none border-2 ${
                  isSearchOpen ? "bg-white" : "bg-transparent"
                }`}
                value={searchTerm}
                onChange={handleSearch}
                style={{ transition: "background-color 0.2s" }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="h-3.5 w-3.5 text-white absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleSearchInput}
              />
            </div>
          ) : (
            // Render the icon only on small screens when the search input is closed
            <div
              className="h-6 w-6 flex ml-10 md:mr-2"
              onClick={toggleSearchInput}
            >
              <FontAwesomeIcon icon={faSearch} className="text-white mt-1 text-xl" />
            </div>
          )}

          <div className="flex items-center ml-9 md:mr-0">
            <div className="flex items-center justify-around">
              
            {!user &&
            <Link to ='/login' className=" ml-36 text-white hover:text-blue-300
               px-4 py-2 rounded-full flex items-center">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login</Link>
         }

            </div>
          </div>
          
          </div>
        </header>
        <div className=" w-full items-center ">
          
          <Sclasses />

        </div>
      </div>
      {/* Right Sidebar (Large Screen) */}
      {!isSmallScreen && (
        <aside className="bg-white shadow-sidebar-right w-64 h-full flex flex-col">
          <h1 className="text-black-500 text-center font-bold pt-4">
            Ongoing Lessons
          </h1>
          <div className="w-60 mx-auto mt-8 bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <div className="relative">
              <img
                className="w-full h-32 object-cover rounded-lg mb-4"
                src="https://plus.unsplash.com/premium_photo-1661281403791-f01400b4ec52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                alt="ongoing lesson"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-gray text-3xl cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="">
                <h1 className="text-black font-bold">Title</h1>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                <span>(Ends 45 mins)</span>
              </div>
            </div>
          </div>
        </aside>
      )}
      
    </div>
    

    
  );
}

export default Home;
