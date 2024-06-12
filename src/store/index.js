import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../features/categoryApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(productsApi.middleware),
});

setupListeners(store.dispatch);
