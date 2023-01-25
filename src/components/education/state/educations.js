import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  educations: [
    {
      id: nanoid(),
      degree: `Bachelor's of Science`,
      majors: [{ id: nanoid(), title: 'Computer Information Systems' }],
      minors: [
        {
          id: nanoid(),
          title: 'Software Engineering',
        },
        {
          id: nanoid(),
          title: 'Web Design',
        },
      ],
      institution: {
        name: 'The College of St. Scholastica',
        location: {
          address: '1200 Kenwood Ave',
          city: 'Duluth',
          state: 'Minnesota',
          postcode: 55806,
        },
        phone: '',
      },
      gpa: 3.6,
    },
  ],
  isloading: true,
};

const educationsSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {
    deleteEd: (store, action) => {
      const id = action.payload;
      store.educations = store.educations.filter((item) => item.id !== id);
    },
  },
});
export const { deleteEd } = educationsSlice.actions;
export default educationsSlice.reducer;
