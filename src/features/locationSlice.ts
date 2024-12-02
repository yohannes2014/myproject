import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { location } from '../types/musicTypes';

const initialState: location = {
  routeName: '',
  pathName: '',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    pathName(state, action: PayloadAction<any>) {
      state.pathName = action.payload;
    },

    setRouteName(state, action: PayloadAction<any>) {
      state.routeName = action.payload;
    }
  }
})

export const { pathName, setRouteName } = locationSlice.actions
export default locationSlice.reducer
