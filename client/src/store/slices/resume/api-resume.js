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
      query: (id) => ({
        url: `${RESUME_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: ['Resume'],
    }),
    updateResume: builder.mutation({
      query: (data, id) => ({
        url: `${RESUME_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    deleteResume: builder.mutation({
      query: (id) => ({
        url: `${RESUME_URL}/${id}`,
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
