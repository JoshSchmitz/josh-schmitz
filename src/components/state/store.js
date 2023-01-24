import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../nav/state/nav';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
