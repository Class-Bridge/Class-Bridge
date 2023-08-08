import React from 'react'
import Header from './Header'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from "yup";
import {faContactCard, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {



  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    info: "",
  };


  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    subject: Yup.string().required("Subject is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  
    info: Yup.string().required(" info is required"),
  });
  


  return (
    <div className="bg-white  p-4  max-w-5xl mx-auto">
      <Header/>
      <div className="  rounded-xl mx-auto mt-8 opacity-60 space-y-4 bg-green-500 py-4 w-full">
        <div className="ml-1 space-y-5 md:flex md:items-center md:justify-around">
        <h1 className="text-4xl font-bold ml-10 bg-slate-300 rounded-2xl p-5">Contact us</h1>
        <img
        className="opacity-30 w-[500px] h-full  object-cover rounded-lg mb-4"
        src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt=""
      />
      </div>
      </div>

      <div className=" max-w-2xl mx-auto md:max-w-6xl md:flex md:items-center justify-between md:ml-14 mt-10 p-2">
      <div className=" bg-white  shadow-md mx-auto mt-10 rounded-md
       items-center justify-center space-y-6">
        <div className=" py-2 space-y-10 text-center p-2 ">
        
        <h1 className="text-xl font-bold bg-green-500 p-2 rounded-lg">Address</h1>
        <img
        className=" w-[500px] h-full  object-cover rounded-lg mb-4"
        src='https://www.google.com/maps/vt/data=5oBr9ZaNFw5ftKBbV3uk4mHROdMYy0dyO4PRhs5wlit1wIsuFZ6v_x4uj7jgiJERr2bwF8AUyQ9EvqbkgF435B5EXkv5BoZIDLcRwQO77RUgXOtfZwBYD5ZMCSIe_SkbPpV3dL6X-L8awdkeQx1yyhRRWm2MG7u8DNg-jSHXHUbuxZe96ZLxlwBJwccOopiiJAN1vONdorLw1G1nnt-vKbobAKhRPmCa7p_jLlZ2COCxTRsqt5zFta4'
        alt=""
      />
      
                
     </div>
     
     <div className="  py-2 space-y-10 text-center ">
     <h1 className="text-xl font-bold p-2 rounded-lg text-left ml-10">Contacts</h1>
       <div className=' flex items-center  mb-4 text-left mx-4 space-x-6'>

       <div className=' flex flex-col space-y-8 mt-2'>
        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-red-500 bg-gray-100 p-1 rounded-sm
         hover:text-yellow-200" />
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-red-500 bg-gray-100 p-1 rounded-sm
         hover:text-yellow-200" />
        </div>
        <div className=''>
        <h1 className='text-xl font-bold'>E-mail</h1>
        <p> info@classBridge.com</p>
        <h1 className='text-xl font-bold'>Tell</h1>
        <p> +252618310996</p>
        </div>
 </div>
     </div>
      </div>
      <div className="max-w-lx mx-w-auto ml-10 md:max-w-5xl w-full md:ml-40 md:mt-16"> 
        <div className="max-w-lx w-xl mr-20 bg-red-300  shadow-md  mx-auto mt-20 rounded-md
       items-center justify-center space-y-6">
        
        <div className='px-2 py-3 md:w-full md:max-w-2xl space-y-6 mb-4'>
          <h1 className='text-2xl text-white font-bold'>Ready to Get Started?</h1>
        <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
      
        >
          <Form className="w-full px-4 md:w-full space-y-6 ">

              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full rounded-md border border-gray-300 p-3 shadow md:w-full"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
           
          
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded-md border border-gray-300 p-3 shadow md:w-full"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
           
            
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
          
           
              <Field
                type="text"
                name="subject"
                id="subjcet"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 p-3 shadow"
              >
                
              </Field>

              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500"
              />
           
            
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                className="w-full rounded-md  border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
         

            <button
              type="submit"
              className="mt-4  w-full rounded-3xl bg-red-400 px-12 py-3 text-white hover:bg-red-500"
            >
              Submit
            </button>
          
          </Form>
        </Formik>
        </div>
      </div>
      </div>
     
      </div>
      </div>
      

  )
}

export default Contact