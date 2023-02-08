import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  projects: [
    {
      id: nanoid(),
      title: 'Grace Gospel Press Website Redesign',
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    deleteProject: (store, action) => {
      const id = action.payload;
      store.projects = store.projects.filter((item) => item.id !== id);
    },
  },
});
export const { deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
