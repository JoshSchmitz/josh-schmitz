import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  educations: [],
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
