/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resumes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = resumeSlice.actions;
export default resumeSlice.reducer;
