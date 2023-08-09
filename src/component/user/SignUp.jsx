// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import React, { useEffect, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import {
//   useSsignUpMutation,
//   useTsignUpMutation,
// } from "../../store/api/AuthSlice";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [tsignUp, { error = {} }] = useTsignUpMutation();
//   const [ssignUp, { err = {} }] = useSsignUpMutation();

//   const [registerError, setRegisterError] = useState(null);

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     role: "",
//     password: "",
//   };
//   const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     // role: Yup.string().required("Role must be select"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = (values) => {
//     console.log(values);

//     if (values.role === "Teacher") {
//       tsignUp({
//         first_name: values.firstName,
//         last_name: values.lastName,
//         email: values.email,
//         password: values.password,
//       })
//         .unwrap()
//         .then(() => {
//           navigate("/Login");
//         });
//     } else {
//       ssignUp({
//         first_name: values.firstName,
//         last_name: values.lastName,
//         email: values.email,
//         password: values.password,
//       })
//         .unwrap()
//         .then(() => {
//           navigate("/Login");
//         });
//     }
//   };

//   useEffect(() => {
//     if (error.status === 409) {
//       setRegisterError("User already exists");
//     }

//     if (error.status === 500) {
//       setRegisterError("Something went wrong, please try again later");
//     }
//   }, [err]);

//   return (
//     <div className="w-full flex flex-row items-center justify-center">
//       <div className="mx-auto rounded-lg bg-white p-10 shadow md:w-1/2 lg:w-1/2">
//         <h4 className="mb-10 text-2xl font-bold">Registeration Form </h4>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form className="w-full">
//             <div className="mb-5">
//               {registerError && (
//                 <div className="text-red-500">{registerError}</div>
//               )}
//             </div>
//             <div className="mb-5">
//               <Field
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="First Name"
//                 className="w-full rounded-3xl border border-gray-300 p-3 shadow"
//               />
//               <ErrorMessage
//                 name="firstName"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-5">
//               <Field
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Last Name"
//                 className="w-full rounded-3xl border border-gray-300 p-3 shadow"
//               />
//               <ErrorMessage
//                 name="lastName"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-5">
//               <Field
//                 type="text"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full rounded-3xl border border-gray-300 p-3 shadow"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-5">
//               <Field
//                 as="select"
//                 name="role"
//                 id="role"
//                 placeholder="Role"
//                 className="w-full rounded-3xl border border-gray-300 p-3 shadow"
//               >
//                 <option></option>
//                 <option value="Teacher">Teacher</option>
//                 <option value="Student">Student</option>
//               </Field>

//               <ErrorMessage
//                 name="role"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-5">
//               <Field
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full rounded-3xl  border border-gray-300 p-3 shadow"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-4  w-full rounded-3xl bg-red-400 px-12 py-3 text-white hover:bg-red-500"
//             >
//               Register
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useSsignUpMutation,
  useTsignUpMutation,
} from "../../store/api/AuthSlice";
import { HiEye, HiEyeOff } from "react-icons/hi";

const SignUp = () => {
  const navigate = useNavigate();

  const [tsignUp, { error = {} }] = useTsignUpMutation();
  const [ssignUp, { err = {} }] = useSsignUpMutation();

  const [registerError, setRegisterError] = useState(null);
  const [change, setChange] = useState(true);


  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    role:  "",
    password: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   role: Yup.string().required("Role must be select"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires a uppercase letter"),
  });

  const handleSubmit = (values) => {
    console.log(values);

    if (values.role === "Teacher") {
      tsignUp({
        first_name: values.first_name,
        last_name: values.first_name,
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          navigate("/Login");
        });
    } else {
      ssignUp({
        first_name: values.first_name,
        last_name: values.first_name,
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          navigate("/Login");
        });
    }
  };

  useEffect(() => {
    if (error.status === 409) {
      setRegisterError("User already exists");
    }

    if (error.status === 500) {
      setRegisterError("Something went wrong, please try again later");
    }
  }, [err]);



  return (
    <div className="w-full lg:w-[70%] mx-auto lg:ml-[19%] p-8 shadow rounded mt-10 font-mono justify-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-3">
        <div className="bg-red-400 rounded-lg  lg:w-[100%]">
          <img
            className="w-full h-[100%] object-fill mx-auto "
            src="\src\assets\Signup.png"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          <Form className="w-full ml-0 flex flex-col justify-start items-start space-y-5 p-4">
            <div className="">
              {registerError && (
                <div className="text-red-500">{registerError}</div>
              )}
            </div>
            <Field
              className="p-3 rounded shadow w-full "
              type="text"
              placeholder="Enter Your first name"
              name="first_name"
            />
            <ErrorMessage
              name="first_name"
              component="div"
              className="text-red-500"
            />

            <Field
              className="p-3 rounded shadow w-full "
              type="text"
              placeholder="Enter Your first name"
              name="last_name"
            />
            <ErrorMessage
              name="last_name"
              component="div"
              className="text-red-500"
            />

            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded shadow w-full "
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />

              <Field
                as="select"
                 name="role"
                 id="role"
                placeholder="Role"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              >

             <option></option>
              <option value="Teacher">Teacher</option>                
              <option value="Student">Student</option>
            </Field>
            <ErrorMessage
                name="role"
                component="div"
                className="text-red-500"
              />

            <div className="relative w-full">
              <Field
                type={`${change ? "password" : "text"}`}
                id="password"
                name="password"
                placeholder="Enter your password"
                className=" rounded shadow    p-3 mt-6  w-full "
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
              className="p-3 rounded shadow w-full bg-red-400 text-[#fff] text-lg"
              type="submit"
            >
              Register
            </button>
            <div className=" flex justify-center mt-5 text-base text-center lg:w-[80%] space-x-2">
              <p className="text-sm ">Already have account?</p>
              <Link to="/Login" className="text-sm text-red-400 font-medium ">
                Sign in
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
