import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66458542b8925626f892194e.mockapi.io/api/v1/categories",
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "",
      providesTags: ["Category"],
    }),
    getSingleCategory: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery,useGetSingleCategoryQuery } = categoriesApi;
