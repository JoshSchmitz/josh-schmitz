import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initalState = {
  languages: [],
  isloading: true,
};

const languagesSlice = createSlice({
  name: 'languages',
  initalState,
  reducers: {
    deleteLang: (store, action) => {
      const id = action.payload;
      store.educations = store.languages.filter((item) => item.id !== id);
    },
  },
});
export const { deleteLang } = languagesSlice.actions;
export default languagesSlice.reducer;
