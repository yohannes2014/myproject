
//Fetch Music
export const FETCH_MUSIC_REQUEST = 'FETCH_MUSIC_REQUEST';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_FAILURE = 'FETCH_MUSIC_FAILURE';

export const fetchMusicRequest = () => ({ type: FETCH_MUSIC_REQUEST }); 
export const fetchMusicSuccess = (music) => ({ type: FETCH_MUSIC_SUCCESS, payload: music });
export const fetchMusicFailure = (error) => ({ type: FETCH_MUSIC_FAILURE, payload: error });    

//Add New Music
export const ADD_MUSIC_REQUEST = 'ADD_MUSIC_REQUEST';
export const ADD_MUSIC_SUCCESS = 'ADD_MUSIC_SUCCESS';
export const ADD_MUSIC_FAILURE = 'ADD_MUSIC_FAILURE';

export const addMusicRequest = (music) =>({type: ADD_MUSIC_REQUEST,payload: music});
export const addMusicSuccess = (music) =>({type: ADD_MUSIC_SUCCESS,payload: music});
export const addMusicFailure = (error) =>({type: ADD_MUSIC_FAILURE, payload: error});   
  
//Update Music

export const UPDATE_MUSIC_REQUEST = 'UPDATE_MUSIC_REQUEST';
export const UPDATE_MUSIC_SUCCESS = 'UPDATE_MUSIC_SUCCESS';
export const UPDATE_MUSIC_FAILURE = 'UPDATE_MUSIC_FAILURE';
  
export const updateMusicRequest = (id,music) => ({type: UPDATE_MUSIC_REQUEST, payload: {id,music}});
export const updateMusicSuccess = (music) => ({type: UPDATE_MUSIC_SUCCESS,payload: music});
export const updateMusicFailure = (error) => ({type: UPDATE_MUSIC_FAILURE,payload: error});
  
//Delete Music

export const DELETE_MUSIC_REQUEST = 'DELETE_MUSIC_REQUEST';
export const DELETE_MUSIC_SUCCESS = 'DELETE_MUSIC_SUCCESS';
export const DELETE_MUSIC_FAILURE = 'DELETE_MUSIC_FAILURE';
  
export const deleteMusicRequest = (id) => ({type: DELETE_MUSIC_REQUEST, payload: id});
export const deleteMusicSuccess = (id) => ({type: DELETE_MUSIC_SUCCESS,payload: id});
export const deleteMusicFailure = (error) => ({type: DELETE_MUSIC_FAILURE,payload: error});  
  


//Total music

export const FETCH_TOTAL_REQUEST = 'FETCH_TOTAL_REQUEST';
export const FETCH_TOTAL_SUCCESS = 'FETCH_TOTAL_SUCCESS';
export const FETCH_TOTAL_FAILURE = 'FETCH_TOTAL_FAILURE';

export const fetchTotalRequest = () => ({ type: FETCH_TOTAL_REQUEST });
export const fetchTotalSuccess = (total) => ({ type: FETCH_TOTAL_SUCCESS, total });
export const fetchTotalFailure = (error) => ({ type: FETCH_TOTAL_FAILURE, error });



// actions/musicActions.js
export const FETCH_MUSIC_BY_ID_REQUEST = 'FETCH_MUSIC_BY_ID_REQUEST';
export const FETCH_MUSIC_BY_ID_SUCCESS = 'FETCH_MUSIC_BY_ID_SUCCESS';
export const FETCH_MUSIC_BY_ID_FAILURE = 'FETCH_MUSIC_BY_ID_FAILURE';

export const fetchMusicByIdRequest = (id) => ({
  type: FETCH_MUSIC_REQUEST,
  payload: id,
});

export const fetchMusicByIdSuccess = (music) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: music,
});

export const fetchMusicByIdFailure = (error) => ({
  type: FETCH_MUSIC_FAILURE,
  payload: error,
});
