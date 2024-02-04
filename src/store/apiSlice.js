import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://192.168.1.105:3000/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order,
      }),
    }),
    getOrder : builder.query({
      query: (id) => `orders/${id}`,
    }),


  }),
});

export const { useGetProductsQuery, useGetProductQuery,
  useCreateOrderMutation,useGetOrderQuery
} = apiSlice;