import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoHtml5,
  IoLogoCss3,
} from 'react-icons/io';

const initialState = {
  languages: [
    {
      id: nanoid(),
      title: 'JavaScript',
      icon: <IoLogoJavascript />,
    },
    {
      id: nanoid(),
      title: 'HTML',
      icon: <IoLogoHtml5 />,
    },
    {
      id: nanoid(),
      title: 'CSS',
      icon: <IoLogoCss3 />,
    },
    {
      id: nanoid(),
      title: 'SASS',
      icon: <IoLogoSass />,
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
