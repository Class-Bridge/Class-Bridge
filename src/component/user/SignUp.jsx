import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [ registerError, setRegisterError ] = useState(null);

    const initialValues = {
        name: "",
        email: "",
        Role:  "",
        password: "",
      };
    
      const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().required("Password is required"),
      });

  return (
   <div className="w-full flex flex-row items-center justify-center">
      <div className="mx-auto rounded-lg bg-white p-10 shadow md:w-1/2 lg:w-1/2">
        <h4 className="mb-10 text-2xl font-bold">Register</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
         
        >
          <Form className='w-full'>
            <div className="mb-5">
              {registerError && <div className="text-red-500">{registerError}</div>}
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="name"
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
            <Field as="select" name="Role">
             <option value="red">Admin</option>
             <option value="green">Teacher</option>
             <option value="blue">Student</option>
           </Field>

              <ErrorMessage
                name="Role"
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

export default SignUp