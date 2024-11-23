import { combineReducers } from "redux";
import musicSlic from './musicsSlice';
import musicPlayerSlice from './musicPlayerSlice'
import locationSlice from './locationSlice';

const rootReducer = combineReducers({
  musics:musicSlic,
  musicPlayer:musicPlayerSlice,
  location:locationSlice
 
});

export default rootReducer;
