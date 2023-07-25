import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseUrl from "./BaseUrl";
import Cookies from "js-cookie";


// Helper function to set the token in the browser's cookie

const setTokenCookie = (token) => {
   Cookies.set("token", token, { expires: 1 });  
  };



export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl
    }),
    tagTypes:["User"],

    endpoints: (builder) => ({

         // Teacher Registration

    tsignUp: builder.mutation({
        query: (newTeacher) => ({
          url: "teacher/signup",
          method:"POST",
          body: newTeacher,
        }),
        invalidatesTags: ["teacher"],
      }),
      // Student Registration
      ssignUp: builder.mutation({
        query: (newStudent) => ({
          url: "student/signup",
          method:"POST",
          body: newStudent,
        }),
        invalidatesTags: ["student"],
      }),

       //Teacher login
    tlogin: builder.mutation({
        query: (user) => ({
          url: "teacher/login",
          method: "POST",
          body: user,
        }),
        invalidatesTags: ["User"],
         // on success we want to set the token cookie
         onQueryStarted: async (arg, { queryFulfilled }) => {
          try {
              const result = await queryFulfilled; 
              setTokenCookie(result.data.token);
          } catch (error) {
              console.log(error);
          }
      },
    }),
      //Student login
      slogin: builder.mutation({
        query: (student) => ({
          url: "student/login",
          method: "POST",
          body: student,
        }),

        invalidatesTags: ["student"],

         // on success we want to set the token cookie
         onQueryStarted: async (arg, { queryFulfilled }) => {
          try {
              const result = await queryFulfilled; 
              setTokenCookie(result.data.token);
          } catch (error) {
              console.log(error);
          }
      },
    }),
       
      

    })
})




export const { useTsignUpMutation, useSsignUpMutation, useTloginMutation, useSloginMutation } = authSlice;

export default authSlice.reducer;