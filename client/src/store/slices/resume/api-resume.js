import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResume: builder.query({
      query: (data) => ({
        url: `${RESUME_URL}`,
        method: 'GET',
        body: data,
      }),
      providesTags: ['Resume'],
    }),
    createResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    updateResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    deleteResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
  }),
});

export const {
  useGetResumeQuery,
  useCreateResumeMutation,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
} = resumeApiSlice;
