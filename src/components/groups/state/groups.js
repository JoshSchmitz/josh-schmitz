import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  groups: [
    {
      id: nanoid(),
      title: 'National Eagle Scout Association',
    },
  ],
  isloading: true,
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    deleteGroup: (store, action) => {
      const id = action.payload;
      store.groups = store.groups.filter((item) => item.id !== id);
    },
  },
});

export const { deleteGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
