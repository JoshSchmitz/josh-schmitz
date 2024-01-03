import { apiSlice } from '../api';
const EXPERIENCE_URL = `/experience`;

export const experienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperience: builder.query({
      query: ({ resumeId, experienceId }) => ({
        url: experienceId
          ? `${EXPERIENCE_URL}/${resumeId}/${experienceId}`
          : `${EXPERIENCE_URL}/${resumeId}`,
        method: 'GET',
      }),
      providesTags: ['Experience'],
    }),
    createExperience: builder.mutation({
      mutation: (data) => ({
        url: `${EXPERIENCE_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Experience'],
    }),
    updateExperience: builder.mutation({
      mutation: (data) => ({
        url: `${EXPERIENCE_URL}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Experience'],
    }),
    deleteExperience: builder.mutation({
      mutation: (data) => ({
        url: `${EXPERIENCE_URL}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Experience'],
    }),
  }),
});

export const {
  useGetExperienceQuery,
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApiSlice;
