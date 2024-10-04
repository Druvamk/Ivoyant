import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getApi: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    postApi: builder.mutation({
      query: (task) => ({ url: "users", method: "POST", body: task }),
      invalidatesTags: ["Users"],
    }),
    deleteApi: builder.mutation({
      query: (id) => ({ url: `users/${id}`, method: "DELETE" }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const { useGetApiQuery, usePostApiMutation, useDeleteApiMutation } = api;
