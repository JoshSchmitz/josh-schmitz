import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../nav/state/nav';
import experiencesReducer from '../experience/state/experiences';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    experiences: experiencesReducer,
  },
});
