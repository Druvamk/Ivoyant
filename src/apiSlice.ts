import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Todo {
  id: string;
  text: string;
}
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3008/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      transformResponse: (res: Todo[]) =>
        res.sort((a, b) => Number(a.id) - Number(b.id)),
      providesTags: ["Todos"],
    }),
    postTodos: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    patchTodos: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodos: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useDeleteTodosMutation,
  usePatchTodosMutation,
  usePostTodosMutation,
} = apiSlice;
