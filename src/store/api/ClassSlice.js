import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';
import BaseUrl from './BaseUrl';

const getToken = () => {
    return Cookies.get("token");
  };

export const ClassApi = createApi({
    reducerPath: 'ClassApi',
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
    tagTypes: ['Classes'],

    endpoints: (builder) => ({
        getClasses: builder.query({
            query: () => '/classes',
            providesTags: ['Classes'],
        }),





    })
})

