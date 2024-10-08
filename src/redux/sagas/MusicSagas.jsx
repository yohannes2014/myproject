import { call, delay, put, takeEvery } from 'redux-saga/effects';
import {
    FETCH_MUSIC_REQUEST,
    fetchMusicFailure,
    fetchMusicSuccess,
    ADD_MUSIC_REQUEST,
    addMusicSuccess,
    addMusicFailure,
    DELETE_MUSIC_REQUEST,
    deleteMusicSuccess,
    deleteMusicFailure,
} from '../actions/MusicActions';
import { fetchMusicApi, addMusicApi,deleteMusicApi } from '../../api/musicApi';





function* fetchMusic() {
    try {
        yield delay(1000);
        const response = yield call(fetchMusicApi);
        yield put(fetchMusicSuccess(response.data));
    } catch (error) {
        yield put(fetchMusicFailure(error.message));
    }
}



function* handleAddMusic(action) {
   
    try {
        const response = yield call(addMusicApi, action.payload);
        yield put(addMusicSuccess(response.data)); 
      } catch (error) {
        yield put(addMusicFailure(error.message));
      }
}


function* handleDeleteMusic(action) {
    try {
      yield call(deleteMusicApi, action.payload); 
      yield put(deleteMusicSuccess(action.payload)); 
    } catch (error) {
      yield put(deleteMusicFailure(error.message)); 
    }
  }




function* watchMusicSagas() {
    yield takeEvery(FETCH_MUSIC_REQUEST, fetchMusic);
    yield takeEvery(ADD_MUSIC_REQUEST, handleAddMusic);
    yield takeEvery(DELETE_MUSIC_REQUEST, handleDeleteMusic);
}


export default watchMusicSagas;








  

