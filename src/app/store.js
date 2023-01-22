import { configureStore } from '@reduxjs/toolkit';
import learningMaterialReducer from '../features/syllabus/learningMaterialSlice';

export const store = configureStore({
  reducer: {
    learningMaterial: learningMaterialReducer
  }
});
