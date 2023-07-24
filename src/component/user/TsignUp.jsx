import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSsignUpMutation, useTsignUpMutation } from '../../store/api/AuthSlice';


const TsignUp = () => {


  const navigate = useNavigate();

  const [ tsignUp, { error = {} } ] = useTsignUpMutation();
  const [ ssignUp, { err = {} } ] = useSsignUpMutation();

  const [ registerError, setRegisterError ] = useState(null);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "", 
      };
      const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        // role: Yup.string().required("Role must be select"),
        password: Yup.string().required("Password is required"),
      });

      const handleSubmit = (values) => {


        console.log(values);

        // if(values.role ==='Teacher'){
          tsignUp({
            
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
             }).unwrap().then(() => {
              navigate ("/user/login");
            });

        // }else{
        //   ssignUp({
            
        //     first_name: values.firstName,
        //     last_name: values.lastName,
        //     email: values.email,
        //     password: values.password,
        //      }).unwrap().then(() => {
        //       navigate ("/user/login");
        //     });

        // }

      
          
      };

      useEffect(() => {
        if (error.status === 400) {
          setRegisterError("User already exists");
        };
    
        if (error.status === 500) {
          setRegisterError("Something went wrong, please try again later");
        }
      }, [error]);

      // useEffect(() => {
      //   if (error.status === 409) {
      //     setRegisterError("User already exists");
      //   };
    
      //   if (error.status === 500) {
      //     setRegisterError("Something went wrong, please try again later");
      //   }
      // }, [err]);
      
    
     

  return (
   <div className="w-full flex flex-row items-center justify-center">
      <div className="mx-auto rounded-lg bg-white p-10 shadow md:w-1/2 lg:w-1/2">
        <h4 className="mb-10 text-2xl font-bold">Teacher Registeration </h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
         onSubmit={handleSubmit}
        >
          <Form className='w-full'>
            <div className="mb-5">
              {registerError && <div className="text-red-500">{registerError}</div>}
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-5">
            <Field  as="select" name="role" id='role'
             placeholder='Role' className="w-full rounded-3xl border border-gray-300 p-3 shadow"
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
            </div>
            <div className="mb-5">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full rounded-3xl  border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
         
            <button
              type="submit"
              className="mt-4  w-full rounded-3xl bg-red-400 px-12 py-3 text-white hover:bg-red-500"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default TsignUp