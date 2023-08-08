import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAddClassMutation } from "../store/api/ClassSlice";

const AddClass = () => {
  const navigate = useNavigate();

  const [addClass] = useAddClassMutation();

  const initialValues = {
    title: "",
    description: "",
    image:  ""
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().required("Image is required"),
  });

  const handleSubmit = (values) => {
    addClass({
      title: values.title,
      description: values.description,
      image: values.image,
    })
      .unwrap()
      .then(() => {
        navigate("/teacher/dashpord");
        window.location.reload();
      });
  };
  return (
    <div className="w-full mr-9 mt-5 p-5 flex flex-row items-center justify-center md:max-w-5xl">
      <div className=" w-full items-center justify-center rounded-lg bg-white p-10 shadow md:w-1/2 lg:w-1/2">
        <h4 className="mb-10 text-2xl font-bold">Add Class </h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full max-w-md px-10 md:max-w-2xl">
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
                placeholder="Image"
                className="w-full rounded-3xl border border-gray-300 p-3 shadow"
              />
              <ErrorMessage
                name="image"
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
              Add Class
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddClass;
