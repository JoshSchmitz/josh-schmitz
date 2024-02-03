import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const educationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducation: builder.query({
      query: ({ resumeId, educationId }) => ({
        url: educationId
          ? `${RESUME_URL}/${resumeId}/education/${educationId}`
          : `${RESUME_URL}/${resumeId}/education`,
        method: 'GET',
      }),
      providesTags: ['Education'],
    }),
    createEducation: builder.mutation({
      mutation: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/education`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Education'],
    }),
    updateEducation: builder.mutation({
      mutation: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/education/${data.educationId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Education'],
    }),
    deleteEducation: builder.mutation({
      mutation: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/education/${data.educationId}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Education'],
    }),
  }),
});

export const {
  useGetEducationQuery,
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApiSlice;