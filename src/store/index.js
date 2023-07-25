import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {authSlice} from '../store/api/AuthSlice'
// import { ClassApi } from './api/ClassSlice';


export const store = configureStore({

  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    //  [ClassApi.reducerPath]: ClassApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authSlice.middleware)
    // .concat(ClassApi.middleware),
    
});


setupListeners(store.dispatch);