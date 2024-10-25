import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../model/contact.model";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3008/" }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    contact: builder.query<Contact[], void>({
      query: () => "contacts",
      providesTags: ["contact"],
    }),
    getContact: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
      providesTags: ["contact"],
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const {
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} = contactApi;
