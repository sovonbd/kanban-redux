import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";

const store1 = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store1;
