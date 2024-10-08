
/* export const DELETE_MUSIC = 'DELETE_MUSIC';

export const SET_MUSIC = 'SET_MUSIC';
export const MUSIC_FORM ='MUSIC_FORM';
export const ALBUM_FORM ='ALBUM_FORM';
export const MUSIC_FORM ='MUSIC_FORM';
export const ALBUM_FORM_CLOSE ='ALBUM_FORM_CLOSE';
export const FETCH_MUSIC ='FETCH_MUSIC';


export const deleteMusic = (id) =>({type:DELETE_MUSIC, id});

export const setMusic = (music)=>({type:SET_MUSIC, music});
export const musicForm = () =>({type:MUSIC_FORM});
export const albumForm = () =>({type:ALBUM_FORM});
export const closeMusicForm = () =>({type:MUSIC_FORM_CLOSE});
export const closeAlbumForm = () =>({type:ALBUM_FORM_CLOSE});
export const fetchMusic = () => ({ type: FETCH_MUSIC }); 
 */
//Music Form



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
  
//Delete Music

export const DELETE_MUSIC_REQUEST = 'DELETE_MUSIC_REQUEST';
export const DELETE_MUSIC_SUCCESS = 'DELETE_MUSIC_SUCCESS';
export const DELETE_MUSIC_FAILURE = 'DELETE_MUSIC_FAILURE';
  
export const deleteMusicRequest = (id) => ({type: DELETE_MUSIC_REQUEST, payload: id});
export const deleteMusicSuccess = (id) => ({type: DELETE_MUSIC_SUCCESS,payload: id,});
export const deleteMusicFailure = (error) => ({type: DELETE_MUSIC_FAILURE,payload: error});
  













