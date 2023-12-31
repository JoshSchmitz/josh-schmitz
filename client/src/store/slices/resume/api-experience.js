import { apiSlice } from '../api';
const EXPERIENCE_URL = `/resume/experience`;

export const experienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperience: builder.query({
      query: (data) => ({
        url: `${EXPERIENCE_URL}`,
        method: 'GET',
        body: data,
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
