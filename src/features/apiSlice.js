import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66458542b8925626f892194e.mockapi.io/api/v1",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
