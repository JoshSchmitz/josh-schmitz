import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumes: builder.mutation({
      query: () => ({
        url: `${RESUME_URL}`,
        method: 'GET',
      }),
    }),
    createResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    getResume: builder.mutation({
      query: () => ({
        url: `${RESUME_URL}/:id`,
        method: 'GET',
      }),
    }),
    updateResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/:id`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteResume: builder.mutation({
      query: () => ({
        url: `${RESUME_URL}/:id`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetResumesMutation,
  useCreateResumeMutation,
  useGetResumeMutation,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
} = resumeApiSlice;
