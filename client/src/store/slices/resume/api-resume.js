import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumes: builder.query({
      query: () => ({
        url: `${RESUME_URL}`,
        method: 'GET',
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
    getResume: builder.query({
      query: (resumeId) => ({
        url: `${RESUME_URL}/${resumeId}`,
        method: 'GET',
      }),
      providesTags: ['Resume'],
    }),
    updateResume: builder.mutation({
      query: (data, resumeId) => ({
        url: `${RESUME_URL}/${resumeId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    deleteResume: builder.mutation({
      query: (resumeId) => ({
        url: `${RESUME_URL}/${resumeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Resume'],
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
