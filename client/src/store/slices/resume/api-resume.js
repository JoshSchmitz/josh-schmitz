import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumes: builder.query({
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
    getResume: builder.query({
      query: (id) => ({
        url: `${RESUME_URL}/${id}`,
        method: 'GET',
      }),
    }),
    updateResume: builder.mutation({
      query: (data, id) => ({
        url: `${RESUME_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteResume: builder.mutation({
      query: (id) => ({
        url: `${RESUME_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetResumesQuery,
  useCreateResumeMutation,
  useGetResumeQuery,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
} = resumeApiSlice;
