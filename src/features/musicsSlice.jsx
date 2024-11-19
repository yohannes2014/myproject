// features/musicSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    musics:[],
    albums:[],
    artist:[],
    genres:[],
    loading: false,
    error: null,
    total: 0,
    currentMusic:null,
    totalItem : 0,
    removeMusic:false,
    musicAdded:false,
    musicUpdate:false,


};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {

        fetchMusicRequest : (state) => {
            state.loading = false;
            state.error = null;
           
            
        },
        fetchMusicSuccess: (state, action) => {
            state.loading = false;
            state.musics = action.payload;
        },
        fetchMusicFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addMusicRequest: (state) => {
            state.error = null;
        },
        addMusicSuccess: (state, action) => {
            state.musics.push(action.payload);
        },
        addMusicFailure: (state, action) => {
            state.error = action.payload;
            
        },
        updateMusicRequest: (state) => {
            state.error = null;
        },
        updateMusicSuccess: (state, action) => {
            
            state.musics = state.musics.map(music => music._id === action.payload._id ? action.payload : music);
        },
        updateMusicFailure: (state, action) => {
            state.error = action.payload;
        },
        deleteMusicRequest: (state) => {
            state.error = null;
        },
        deleteMusicSuccess: (state, action) => {
            state.musics = state.musics.filter(music => music._id !== action.payload);
        },
        deleteMusicFailure: (state, action) => {
            state.error = action.payload;
        },
        setCurrentRequest: (state)=> {
            state.error = null;
            
        },
       setCurrentSuccess: (state, action) => {
            const musicId = action.payload._id;
            state.currentMusic = state.musics.find(music => music._id === musicId);
          }, 
        setCurrentFailure: (state, action) =>{
            state.error = action.payload
          },
        fetchTotalRequest : (state) => {
            state.error = null
        },
        fetchTotalSuccess: (state, action) =>{
            state.total = action.payload
        },
        fetchTotalFailure: (state, action) =>{
            state.error = action.payload
        },
        fetchAlbumsRequest : (state) => {
            state.error = null;
        },
        fetchAlbumsSuccess: (state, action) => {
            state.loading = false;
            state.albums = action.payload;
          
        },
        fetchAlbumsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchArtistsRequest : (state) => {
            state.error = null;
        },
        fetchArtistsSuccess: (state, action) => {
            state.loading = false;
            state.artist = action.payload;
        },
        fetchArtistsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchGenresRequest : (state) => {
            state.error = null;
        },
        fetchGenresSuccess: (state, action) => {
            state.loading = false;
            state.genres = action.payload;
        },
        fetchGenresFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    
        totalMUsicItem : (state, action) => {
            state.totalItem = action.payload
        },
        findMuiscById : (state, action) =>{
            state.currentMusic = state.musics.find(music => music._id === action.payload);
        },
        setRemoveCard : (state, action) =>{
            state.removeMusic = true;
        },
        cancelRemoveCard : (state, action) =>{
            state.removeMusic = false;
        },
        musicAddedSucce : (state)=>{
            state.musicAdded = true;
        },
        musicAddedEnd : (state)=>{
            state.musicAdded = false;
        },
        musicUpdateSucce : (state)=>{
            state.musicUpdate = true;
        },
        musicUpdateEnd : (state)=>{
            state.musicUpdate = false;
        },

    },
});

export const {

fetchTotalRequest,
fetchTotalSuccess,
fetchTotalFailure,

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

fetchAlbumsRequest,
fetchAlbumsSuccess,
fetchAlbumsFailure,

fetchArtistsRequest,
fetchArtistsSuccess,
fetchArtistsFailure,

fetchGenresRequest,
fetchGenresSuccess,
fetchGenresFailure,

fetchSearchMusic,

totalMUsicItem,

findMuiscById,
setRemoveCard,


cancelRemoveCard,
musicAddedSucce,
musicAddedEnd,
musicUpdateSucce,
musicUpdateEnd

  
} = musicSlice.actions


export default musicSlice.reducer;





