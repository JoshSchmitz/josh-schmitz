import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  skills: {
    id: nanoid(),
    title: 'Front-End Web Development',
  },
  isloading: true,
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    deleteSkill: (store, action) => {
      const id = action.payload;
      store.skills = store.skills.filter((item) => item.id !== id);
    },
  },
});
export const { deleteSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
