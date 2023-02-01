import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { SiReact } from 'react-icons/si';
import { MdAddTask } from 'react-icons/md';

const initialState = {
  skills: [
    {
      id: nanoid(),
      title: 'Front-End Web Development',
      years: 5,
      experience: 6,
      icon: <MdAddTask className='icon'></MdAddTask>,
      highlighted: true,
    },
    {
      id: nanoid(),
      title: 'Responsive Design',
      years: 6,
      experience: 7,
      icon: <MdAddTask className='icon'></MdAddTask>,
      highlighted: false,
    },
    {
      id: nanoid(),
      title: 'React',
      years: 1,
      experience: 2,
      icon: <SiReact className='icon'></SiReact>,
      highlighted: true,
    },
  ],
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
