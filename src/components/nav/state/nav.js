import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navItems: [
    { id: 1, item: 'Home' },
    { id: 2, item: 'Resume' },
    { id: 3, item: 'Contact' },
  ],
  currentItem: 'Home',
  isLoading: true,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    newCurrentItem: (store, action) => {
      store.currentItem = action.payload;
    },
  },
});
export const { newCurrentItem } = navSlice.actions;
export default navSlice.reducer;
