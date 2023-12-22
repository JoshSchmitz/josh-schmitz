import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api';
import navReducer from './slices/nav';
import authReducer from './slices/auth/auth';
import resumeReducer from './slices/resume/resume';

const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    resumes: resumeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
