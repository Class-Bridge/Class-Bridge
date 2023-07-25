import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSloginMutation, useTloginMutation } from '../../store/api/AuthSlice';
import { retry } from '@reduxjs/toolkit/dist/query';


const Login = () => {

  const navigate = useNavigate();

  const [ tlogin, { error = {}, success } ] = useTloginMutation(); 
  const [ slogin, { err = {} } ] = useSloginMutation();

 // console.log(tlogin);

  const [loginErrror, setLoginError] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


  const handleSubmit =  (values) => {



    if (!loginErrror){

    tlogin({
      email: values.email,
      password: values.password
    })
    .unwrap().then(() => {
      navigate("/home");
        window.location.reload();
    });

    }if(!loginErrror){

    slogin({
      email: values.email,
      password: values.password, 
     })
     .unwrap().then(() => {
      navigate("/home");
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
    if (error.status === 401) {
      setLoginError("Invalid email or password");
    }

    if (error.status === 500) {
      setLoginError("Something went wrong, please try again later");
    }
  }, [err]);




  return (

    <div className=" w-screen grid grid-rows-1 grid-cols-2 items-center justify-center">

      <div  className=' mx-auto justify-center items-center  '>
        <div>
          <img src='/src/assets/class pridge.JPG' className='w-25 h-25 mb-20 '/>
        </div>

        <div>
        <h1 className='font-bold text-3xl mt-3'>ClassBridge: Connet<br></br> and Collaborate</h1>
        <p className='mt-5 text-sm'>All your Class in One Place</p>
        </div>

      </div>
      <div className=" w-full h-screen mx-auto justify-center items-center rounded-lg  bg-white p-10 shadow  ">
        <h4 className="mb-10 text-2xl font-bold">Login</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >

          <Form  className='w-1/2 mx-auto justify-center items-center'> 
          <div className="mb-5">
            {loginErrror && <div className="text-red-500">{loginErrror}</div>}
          </div>
          <label className='text-sm mb-5'> Enter Your Email</label>
            <div className="mb-5">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-3xl border-2 border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div> 
            <label className='text-sm mb-5'>Password</label>
            <div className="mb-5">
             
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full  rounded-3xl border-1 border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>        
            <button
              type="submit"
              className=" w-full mt-4 rounded-3xl bg-red-400 px-12 py-3 text-white hover:bg-red-500"
            >
              Login
            </button>
            <div>
            <span className='text-sm mb-5'>Forgo Your Password? </span>
            </div>
            <div className="mt-1">
            <Link to ='/teacher/login/register' className="text-blue-500 mx-5 ">Create an account</Link>
            </div>
           
          </Form>
        </Formik>
        
      </div>
      
    </div>
  )
}

export default Login