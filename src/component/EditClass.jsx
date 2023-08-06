import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useGetClassesQuery,
  useUpdateClassMutation,
} from "../store/api/ClassSlice";

const EditClass = () => {
  const { data: classes = [] } = useGetClassesQuery();
  const navigate = useNavigate();

  const [updateClass] = useUpdateClassMutation();

  const params = useParams();

  const [initialValues, setInitialValues] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const course = classes.find((course) => course.id === Number(params.id));
    if (course) {
      setInitialValues({
        title: course.title,
        image: course.image,
        description: course.description
      });
    } 
  }, [classes, params.id]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    image: Yup.string().required("Image is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    updateClass({
      class_id: Number(params.id),
      updatedClass: values
    })
      // .unwrap()
      // .then(() => {
      //   navigate("/teacher/dashpord");
      //   // window.location.reload();
      // });
  };
  return (
    <>
    <div className="w-full flex flex-row items-center justify-center space-y-10">
      <div className="mx-auto rounded-lg bg-white p-10 shadow md:w-1/2 lg:w-1/2">
        <h4 className="mb-10 text-2xl font-bold">Edit Class </h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form className="w-full">
            <div className="mb-5"></div>
            <div className="mb-5">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="Url"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-5">
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Description"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4  w-full rounded-3xl bg-red-400 px-12 py-3 text-white hover:bg-red-500"
            >
              Update Class
            </button>
          </Form>
        </Formik>
        
      </div>
    </div>
    
    <div className=" mt-20"></div>
    </>
  );
};

export default EditClass;
