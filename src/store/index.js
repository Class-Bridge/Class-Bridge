import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "../store/api/AuthSlice";
import { ClassApi } from "./api/ClassSlice";
import { userSlice } from "./api/UserSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [ClassApi.reducerPath]: ClassApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authSlice.middleware)
      .concat(ClassApi.middleware)
      .concat(userSlice.middleware)
});

setupListeners(store.dispatch);
