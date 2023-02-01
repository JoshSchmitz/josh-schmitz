import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { IoLogoSass, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';

const initialState = {
  languages: [
    {
      id: nanoid(),
      title: 'JavaScript',
      icon: <IoLogoJavascript className='icon' />,
      years: 3,
      highlighted: true,
    },
    {
      id: nanoid(),
      title: 'HTML',
      icon: <IoLogoHtml5 className='icon' />,
      years: 6,
      highlighted: false,
    },
    {
      id: nanoid(),
      title: 'CSS',
      icon: <IoLogoCss3 className='icon' />,
      years: 6,
      highlighted: false,
    },
    {
      id: nanoid(),
      title: 'SASS',
      icon: <IoLogoSass className='icon' />,
      years: 3,
      highlighted: true,
    },
  ],
  isloading: true,
};

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    deleteLang: (store, action) => {
      const id = action.payload;
      store.educations = store.languages.filter((item) => item.id !== id);
    },
  },
});
export const { deleteLang } = languagesSlice.actions;
export default languagesSlice.reducer;
