import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66458542b8925626f892194e.mockapi.io/api/v1",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: `/products`,
        params,
      }),
      providesTags: ["Product"],
    }),
    getParamsProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => `products/${productId}`,
    }),
    deleteProduct: builder.mutation({
      query: ({ productId, categoryId }) => ({
        url: `/categories/${categoryId}/products/${productId}`,
        method: "DELETE",
      }),
      providesTags: ["Product"],
    }),
    getAllCategoryProducts: builder.query({
      query: (params, categoryId) => ({
        url: `/categories/${categoryId}/products`,
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetParamsProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useGetAllCategoryProductsQuery,
} = productsApi;
