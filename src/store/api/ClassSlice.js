import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import BaseUrl from "./BaseUrl";

const getToken = () => {
  return Cookies.get("token");
};

export const ClassApi = createApi({
  reducerPath: "ClassApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Classes"],

  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => ({
        url: "classes",
        method: "GET",
      }),
      providesTags: ["Classes"],
    }),

    addClass: builder.mutation({
      query: (newClass) => ({
        url: "classes",
        method: "POST",
        body: newClass,
      }),
      invalidatesTags: ["Classes"],
    }),

    updateClass: builder.mutation({
      query: ({ class_id, updatedClass }) => ({
        url: `classes/${class_id}`,
        method: 'PUT',
        body: updatedClass,
    }),
      invalidatesTags: ["Classes"],
    }),

    deleteClass: builder.mutation({
      query: ( class_id ) => ({
        url: `classes/${class_id}`,
        method: 'DELETE',
    }),
      invalidatesTags: ["Classes"],
    }),

    getStudentRequest: builder.query({
      query: () => ({
        url: "teacher/class-requests",
        method: "GET",
      }),
      providesTags: ["Classes"],

    }),
    requestClass: builder.mutation({
      query:({class_id, requestedClass}) => ({
        url: `classes/${class_id}/request`,
        method: "POST",
        body: requestedClass
      }),
      invalidatesTags: ["Classes"],
    }),
    approveClass: builder.mutation({
      query: ({class_id, student_id, approvedClass}) => ({
        url: `classes/${class_id}/approve/${student_id}`,
        method: "POST",
        body: approvedClass
      }),

      invalidatesTags: ["Classes"],
    }),

    getStudentClasses: builder.query({
      query: () => ({
        url: "student/classes",
        method: "GET",
      }),
      providesTags: ["Classes"],

    }),
    
  }),
});

export const { 
   useGetClassesQuery,
   useGetStudentRequestQuery,
   useAddClassMutation,
   useUpdateClassMutation,
   useDeleteClassMutation,
   useRequestClassMutation,
   useApproveClassMutation,
   useGetStudentClassesQuery
  } = ClassApi;
