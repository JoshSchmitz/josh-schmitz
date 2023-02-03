import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../nav/state/nav';
import experiencesReducer from '../experience/state/experiences';
import educationsReducer from '../education/state/educations';
import skillsReducer from '../skill/state/skills';
import languagesReducer from '../language/state/languages';
import leadershipsReducer from '../leadership/state/leaderships';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    experiences: experiencesReducer,
    educations: educationsReducer,
    skills: skillsReducer,
    languages: languagesReducer,
    leaderships: leadershipsReducer,
  },
});
