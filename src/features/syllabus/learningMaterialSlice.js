import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false
};

const learningMateriaSlice = createSlice({
  name: 'learningMaterial',
  initialState,
  reducers: {
    showLearningMaterial: (state, action) => {
      // state.push(action.payload)
      state.isVisible = action.payload;
    }
  }
});

export const { showLearningMaterial } = learningMateriaSlice.actions;
export default learningMateriaSlice.reducer;
