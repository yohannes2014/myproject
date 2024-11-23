import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../types/musicTypes';

const initialState:Location = {
    routeName: '',
    pathName: '',
}

const locationSlice = createSlice({
    name: 'location',
    initialState,

    reducers :{
       
    pathName(state, action: PayloadAction<string>) {
        state.pathName = action.payload;
      },
  
      setRouteName(state, action: PayloadAction<string>) {
        state.routeName = action.payload;
      } 
    }
})

export const {pathName, setRouteName} = locationSlice.actions
export default locationSlice.reducer
