import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";;
import BaseUrl from "./BaseUrl";

// Helper function to get the token from the browser's cookie
const getToken = () => {
  return Cookies.get("token");
};

export const userSlice = createApi({
  reducerPath: "userApi",
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
  endpoints: (builder) => ({
      // get Teacher
      getTeacher: builder.query({
        query: () => {
          return {
            url: "teacher/profile",
            method: "GET",
          };
        },
      }),
      getStudent: builder.query({
        query: () => {
          return {
            url: "student/profile",
            method: "GET",
          };
        },
      }),
  }),
});

export const { useGetTeacherQuery, useGetStudentQuery } = userSlice;

export default userSlice.reducer;
