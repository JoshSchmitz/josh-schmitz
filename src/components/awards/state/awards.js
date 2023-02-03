import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  awards: [
    {
      id: nanoid(),
      title: 'Eagle Scout',
    },
  ],
  isLoading: true,
};

const awardsSlice = createSlice({
  name: 'awards',
  initialState,
  reducers: {
    deleteAward: (store, action) => {
      const id = action.payload;
      store.awards = store.awards.filter((item) => item.id !== id);
    },
  },
});
export const { deleteAward } = awardsSlice.actions;
export default awardsSlice.reducer;
