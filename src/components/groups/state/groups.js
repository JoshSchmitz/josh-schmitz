import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const dateOptions = {
  year: 'numeric',
  month: 'long',
};
/** alternate date formats
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
*/

const initialState = {
  groups: [
    {
      id: nanoid(),
      title: 'National Eagle Scout Association',
      startDate: new Date('2008-08-20').toLocaleDateString(
        undefined,
        dateOptions
      ),
      endDate: new Date().toLocaleDateString(undefined, dateOptions),
    },
    {
      id: nanoid(),
      title: 'CSS Computer Club',
      startDate: new Date('2008-10-01').toLocaleDateString(
        undefined,
        dateOptions
      ),
      endDate: new Date('2012-06-01').toLocaleDateString(
        undefined,
        dateOptions
      ),
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
