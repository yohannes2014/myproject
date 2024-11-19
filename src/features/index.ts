import { combineReducers } from "redux";
import musicSlic from './musicsSlice'
import musicPlayerSlice from './musicPlayerSlice'

const rootReducer = combineReducers({
  musics:musicSlic,
  musicPlayer:musicPlayerSlice,
 
});

export default rootReducer;
