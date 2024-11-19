import { all } from "redux-saga/effects";
import watchMusicSagas from "./MusicSagas";

function* rootSaga(){
    yield all([
         watchMusicSagas(),
    ])
}

export default rootSaga