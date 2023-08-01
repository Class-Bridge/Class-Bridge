import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSloginMutation,
  useTloginMutation,
} from "../../store/api/AuthSlice";

const Login = () => {
<<<<<<< HEAD
  

=======
>>>>>>> origin/master
  const navigate = useNavigate();
  const [tlogin, { error = {}, success }] = useTloginMutation();
  const [slogin, { err = {} }] = useSloginMutation();
  const [loginErrror, setLoginError] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    if (!loginErrror) {
      tlogin({
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
          navigate("/home");
          window.location.reload();
        });
    }

    if (!loginErrror) {
      slogin({
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then(() => {
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
    <div className="w-full grid gap-8 md:flex md:grid-cols-2 md:max-w-5xl lg:max-w-7xl">
      <div className="flex mx-auto justify-center items-center md:block">
        <div className="md:shrink-0">
          <img
            src="/src/assets/class pridge.JPG"
            className="h-32 w- md:h-full md:w-full lg:h-full lg:w-screen md:mb-3 lg:mb-0"
            alt="ClassBridge"
          />
        </div>
        <div className="md:ml-4">
          <h1 className="font-bold text-xl mx-3 md:text-3xl lg:text-4xl">
            ClassBridge: Connect
            <br /> and Collaborate
          </h1>
          <p className="my-10 text-sm lg:mt-1">All your Class in One Place</p>
        </div>
      </div>
      <div className="w-full mt-3 mx-auto justify-center items-center rounded-lg bg-white p-10 shadow md:w-full lg:w-full">
        <h4 className="mb-10 text-2xl font-bold">Login</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className=""
        >
          <Form className="w-full mx-auto justify-center items-center md:w-full">
            <div className="mb-5">
              {loginErrror && <div className="text-red-500">{loginErrror}</div>}
            </div>
            <label className="text-sm mb-2 md:mb-5">Enter Your Email</label>
            <div className="mb-2 md:mb-5">
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
            <label className="text-sm mb-2 md:mb-5">Password</label>
            <div className="mb-2 md:mb-5">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full rounded-3xl border-1 border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 rounded-3xl bg-red-400 px-8 py-3 text-white hover:bg-red-500"
            >
              Login
            </button>
            <div>
              <span className="text-sm mb-2 md:mb-5">
                Forgot Your Password?
              </span>
            </div>
            <div className="mt-1">
              <Link to="/teacher/login/register" className="text-blue-500 mx-5">
                Create an account
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
