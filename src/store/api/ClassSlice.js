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
    
  }),
});

export const { useGetClassesQuery, useAddClassMutation, useUpdateClassMutation, useDeleteClassMutation}=ClassApi;
