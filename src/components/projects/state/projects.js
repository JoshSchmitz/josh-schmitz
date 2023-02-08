import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const options = {
  year: 'numeric',
  month: 'long',
};

const initialState = {
  projects: [
    {
      id: nanoid(),
      title: 'Grace Gospel Press Website Redesign',
      startDate: new Date('2016-01-15').toLocaleDateString(undefined, options),
      endDate: new Date('2017-09-01').toLocaleDateString(undefined, options),
      description: `Redesigned the Grace Gospel Press website to parallel the Duluth Bible Church website. Created online bookstore and Grace Family Journal.`,
      highlighted: false,
    },
    {
      id: nanoid(),
      title: 'VP Wild Rice Logo Update',
      startDate: new Date('2008-02-01').toLocaleDateString(undefined, options),
      endDate: new Date('2008-03-30').toLocaleDateString(undefined, options),
      description: `Developed a new logo and branding for company and product.`,
      highlighted: true,
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
