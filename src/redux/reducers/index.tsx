import { combineReducers } from "redux";
import musicRaducer from "./musicRaducer";

const rootRaducer = combineReducers({
  musics:musicRaducer,
});


export default rootRaducer