import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  experiences: [
    {
      id: nanoid(),
      position: 'Autonomous Vehicle Operator',
      company: 'May Mobility',
      location: {
        address: '1234 Airport Rd',
        city: 'Grand Rapids',
        state: 'MN',
        postcode: 55744,
      },
      description:
        'Operated Autonomous Vehicles (AV) prioritizing safety, rider comfort, and autonomous driving by deciding when to use autonomous mode, anticipating vehicle actions, taking control when unsafe or uncomfortable, and logging events for continuous improvement.',
      highlighted: false,
      startDate: '',
      endDate: '',
    },
  ],
  isloading: true,
};

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    deleteExp: (store, action) => {
      const id = action.payload;
      store.experiences = store.experiences.filter((item) => item.id !== id);
    },
  },
});
export const { deleteExp } = experiencesSlice.actions;
export default experiencesSlice.reducer;
