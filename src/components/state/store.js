import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../nav/state/nav';
import experiencesReducer from '../experience/state/experiences';
import educationsReducer from '../education/state/educations';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    experiences: experiencesReducer,
    educations: educationsReducer,
  },
});
