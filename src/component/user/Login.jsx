import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSloginMutation,
  useTloginMutation,
} from "../../store/api/AuthSlice";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const navigate = useNavigate();
  const [tlogin, { error = {}, success }] = useTloginMutation();
  const [slogin, { err = {} }] = useSloginMutation();
  const [loginErrror, setLoginError] = useState(null);
  const [change, setChange] = useState(true);



  const initialValues = {
    role: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    role: Yup.string().required("Role must be select"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")

      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires a uppercase letter"),
  });

  const handleSubmit = (values) => {
    if (values.role === "Teacher") {
      tlogin({
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          navigate("/teacher/dashpord");
          window.location.reload(); 
        });
    }
    if (values.role === "Student") {
    
      slogin({
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          navigate("/student/dashpord"); 
          window.location.reload();
        });
    }
  };

  useEffect(() => {
    if (error.status === 401) {
      setLoginError("Invalid email or password");
    }

    if (error.status === 500) {
      setLoginError("Something went wrong, please try again later");
    }
  }, [error]);

  useEffect(() => {
    if (err.status === 401) {
      setLoginError("Invalid email or password");
    }

    if (err.status === 500) {
      setLoginError("Something went wrong, please try again later");
    }
  }, [err]);

  return (
    <div className="lg:w-[70%] mx-auto lg:ml-[19%] p-8 shadow rounde mt-10 md:w-1/2 font-mono  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols ">
        <div className="flex flex-col justify-center items-center gap-6  bg-red-400  rounded-lg text-white">
          {/* <img className="w-96 h-100 mx-auto " src="/src/assets/login.png" /> */}
          <img
            className="w-96 h-100 mx-auto "
            src="/src/assets/login-cuate.png"
          />
          <span className="font-normal text-center text-xl lg:w-[80%] ">
            Class Bridge Connet and Collaborate
          </span>
          <span className="text-x text-center lg:w-[80%] p-5 font-normal">
            All your Class in One Place
          </span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className=""
        >
          <Form className="flex flex-col justify-center items-start space-y-6 p-5 ">
            <div className="">
              {loginErrror && <div className="text-red-500">{loginErrror}</div>}
            </div>

            <Field
              as="select"
              className="p-3 rounded shadow w-full "
              name="role"
              placeholder="Role"
            > <option></option>
            <option value="Teacher">Teacher</option>                
            <option value="Student">Student</option>
            </Field>
            <ErrorMessage
                name="role"
                component="div"
                className="text-red-500"
              />
            <Field
              className="p-3 rounded shadow w-full "
              type="text"
              placeholder="Enter Your Email "
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 "
            />
            <div className="relative w-full">
              <Field
                type={`${change ? "password" : "text"}`}
                // type= "password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className=" rounded shadow w-full   p-3 mt-6  "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-left text-red-400"
              />
              <div
                onClick={() => setChange(!change)}
                className="cursor-pointer absolute top-10 right-4 text-[#555]"
              >
                {change ? <HiEye /> : <HiEyeOff />}
              </div>
            </div>
            <button
              className="p-3 rounded shadow w-full bg-red-400 text-[#fff]  font-medium text-lg"
              type="submit"
            >
              Login
            </button>
            <div className="flex justify-center mt-5 text-base text-center lg:w-[80%] space-x-2">
              <p className="text-sm ">Don't have account?</p>
              <Link
                to="/teacher/login/register"
                className="text-sm text-red-400 font-medium "
              >
                Sign Up
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { HiEye, HiEyeOff } from "react-icons/hi";

// import {
//   useSloginMutation,
//   useTloginMutation,
// } from "../../store/api/AuthSlice";

// const Login = () => {

//   const navigate = useNavigate();
//   const [tlogin, { error = {}, success }] = useTloginMutation();
//   const [slogin, { err = {} }] = useSloginMutation();
//   const [loginErrror, setLoginError] = useState(null);
//   const [change, setChange] = useState(true)

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required")

//     .min(8, 'Password must be 8 characters long')
//     .matches(/[0-9]/ , 'Password requires a number')
//     .matches(/[a-z]/, 'Password requires a lowercase letter')
//     .matches(/[A-Z]/, 'Password requires a uppercase letter'),

//   });

//   const handleSubmit = (values) => {
//     if (!loginErrror) {
//       tlogin({
//         email: values.email,
//         password: values.password,
//       })
//         .unwrap()
//         .then(() => {
//           navigate("/home");
//           window.location.reload();
//         });
//     }

//     if (!loginErrror) {
//       slogin({
//         email: values.email,
//         password: values.password,
//       })
//         .unwrap()
//         .then(() => {
//           navigate("/home");
//           window.location.reload();
//         });
//     }
//   };

//   useEffect(() => {
//     if (error.status === 401) {
//       setLoginError("Invalid email or password");
//     }

//     if (error.status === 500) {
//       setLoginError("Something went wrong, please try again later");
//     }
//   }, [error]);

//   useEffect(() => {
//     if (error.status === 401) {
//       setLoginError("Invalid email or password");
//     }

//     if (error.status === 500) {
//       setLoginError("Something went wrong, please try again later");
//     }
//   }, [err]);

//   return (
//     <div className="lg:w-[70%] mx-auto lg:ml-[19%] p-8 shadow rounde mt-10 md:w-1/2 font-mono  ">
//     <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols space-x-2">
//       <div className="flex flex-col justify-center items-center gap-6  bg-red-400  rounded-lg text-white">
//         {/* <img className="w-96 h-100 mx-auto " src="/src/assets/login.png" /> */}
//         <img className="w-96 h-100 mx-auto " src="/src/assets/login-cuate.png" />
//         <span className="font-normal text-center text-xl lg:w-[80%] ">
//           Class Bridge Connet and Collaborate
//         </span>
//         <span className=" text-base text-center lg:w-[80%] p-4">
//           All your Class in One Place
//         </span>
//       </div>
//       <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           className=""
//         >
// <Form className="flex flex-col justify-center items-start space-y-6 p-5 ">
// <div className="">
//               {loginErrror && <div className="text-red-500">{loginErrror}</div>}
//             </div>
//             <Field
//               className="p-3 rounded shadow w-full "
//               type="text"
//               placeholder="Enter Your Email "
//               name="email"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500 "
//             />
//           <div className="relative w-full">
//                 <Field
//                   type={`${change ? 'password' : 'text'}`}
//                   // type= "password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   className=" rounded shadow w-full   p-3 mt-6  "
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-left text-red-400"
//                 />
//                 <div onClick={() => setChange(!change)} className="cursor-pointer absolute top-10 right-4 text-[#555]">
//                   {change ? <HiEye /> : <HiEyeOff />}
//                 </div>
//               </div>
//               <button
//               className="p-3 rounded shadow w-full bg-red-400 text-[#fff]  font-medium text-lg"
//               type="submit"
//             >
//               Login
//             </button>
//             <div className="flex justify-center mt-5 text-base text-center lg:w-[80%] space-x-2">
//               <p className="text-sm ">Don't have account?</p>
//               <Link to="/teacher/login/register" className="text-sm text-red-400 font-medium ">
//                 Sign Up
//               </Link>
//             </div>

//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Login;
