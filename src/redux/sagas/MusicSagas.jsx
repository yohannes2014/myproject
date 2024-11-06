import { call, put, takeLatest } from 'redux-saga/effects';
import {
  
  fetchMusicRequest,
  fetchMusicSuccess,
  fetchMusicFailure,

  addMusicRequest,
  addMusicSuccess,
  addMusicFailure,
  
  updateMusicRequest,
  updateMusicSuccess,
  updateMusicFailure,

  deleteMusicRequest,
  deleteMusicSuccess,
  deleteMusicFailure,

  setCurrentRequest,
  setCurrentSuccess,
  setCurrentFailure,

  fetchTotalRequest,
  fetchTotalSuccess,
  fetchTotalFailure,

  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,

  fetchArtistsRequest,
  fetchArtistsSuccess,
  fetchArtistsFailure,

  fetchGenresRequest,
  fetchGenresSuccess,
  fetchGenresFailure,

} from '../../features/musicsSlice';


import { 
          fetchMusicApi, 
          addMusicApi, 
          deleteMusicApi, 
          updateMusicApi, 
          fetchMusicSingleApi, 
          fetchTotalApi,  
          groupByGenresApi,
          groupByArtistApi,
          groupByAlbumApi, 
        } from '../../api/musicApi';

function* fetchMusicSaga() {
  try {
    const response = yield call(fetchMusicApi);
    yield put(fetchMusicSuccess(response.data));
  } catch (error) {
    yield put(fetchMusicFailure(error.response ? error.response.data : error.message));
  }
}

function* handleAddMusicSaga(action) {
  try {
    const response = yield call(addMusicApi, action.payload);
    yield put(addMusicSuccess(response.data));
  } catch (error) {
    yield put(addMusicFailure(error.response ? error.response.data : error.message));
  }
}

function* updateMusicSaga(action) {
  try {
  const responce = yield call(updateMusicApi, action.payload.id, action.payload);
   yield put(updateMusicSuccess(responce.data))
  } catch (error) {
    yield put(updateMusicFailure(error.response ? error.response.data : error.message));
  }
}

function* handleDeleteMusicSaga(action) {
  try {
    yield call(deleteMusicApi, action.payload);
    yield put(deleteMusicSuccess(action.payload));
  } catch (error) {
    yield put(deleteMusicFailure(error.response ? error.response.data : error.message));
  }
}

function* setSingleMusicSaga(action){
  try {
    const  id  = action.payload._id;                                       
    const response = yield call(fetchMusicSingleApi, id);
    yield put(setCurrentSuccess(response.data));
  
  } catch (error) {
    yield put(setCurrentFailure(error.response ? error.response.data : error.message));
  }
}

function* fetchMusicsCountSaga() {
  try {
      const response = yield call(fetchTotalApi);
      yield put(fetchTotalSuccess(response.data));
  } catch (error) {
      yield put(fetchTotalFailure(error.message));
  }
}

function* fetchArtistsSaga() {
  try {
    const response = yield call(groupByArtistApi);
    yield put(fetchArtistsSuccess(response.data));
  } catch (error) {
    yield put(fetchArtistsFailure(error.response ? error.response.data : error.message));
  }
}

function* fetchAlbumsSaga() {
  try {
    const response = yield call(groupByAlbumApi);
    yield put(fetchAlbumsSuccess(response.data));
  } catch (error) {
    yield put(fetchAlbumsFailure(error.response ? error.response.data : error.message));
  }
}

function* fetchGenresSaga() {
  try {
    const response = yield call(groupByGenresApi);
    yield put(fetchGenresSuccess(response.data));
  } catch (error) {
    yield put(fetchGenresFailure(error.response ? error.response.data : error.message));
  }
}

function* watchMusicSagas() {
  yield takeLatest( fetchMusicRequest, fetchMusicSaga);
  yield takeLatest(addMusicRequest, handleAddMusicSaga);
  yield takeLatest(updateMusicRequest, updateMusicSaga);
  yield takeLatest(deleteMusicRequest, handleDeleteMusicSaga);
  yield takeLatest(setCurrentRequest, setSingleMusicSaga);
  yield takeLatest(fetchTotalRequest, fetchMusicsCountSaga);
  yield takeLatest(fetchAlbumsRequest, fetchAlbumsSaga);
  yield takeLatest(fetchArtistsRequest, fetchArtistsSaga);
  yield takeLatest(fetchGenresRequest, fetchGenresSaga);
}

export default watchMusicSagas;



