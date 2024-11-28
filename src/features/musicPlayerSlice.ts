import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { musicPlayer } from "../types/musicTypes";

const myMusic = {
  _id: '',
title: '',
artist: '',
album: '',
genres: '',
image: '',
audio: '',
totalItem:0,
duration: ''
}

const initialState:musicPlayer = {
  musics:[myMusic], 
  setPlay:false,
  setPlayer: true,

};

const musicPlayerSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusicPlay(state, action: PayloadAction<musicPlayer>) {
      state.setPlay = action.payload.setPlay;
      state.setPlayer = false;
      state.musics = action.payload.musics; 
    },

    pauseSong(state) {
      state.setPlay = false; 
    },

    closePlayer(state) {
      state.setPlayer = true; 
      state.musics = [myMusic]; 
    },
  },
});


export const {
  pauseSong,
  closePlayer,
  setMusicPlay,
} = musicPlayerSlice.actions;


export default musicPlayerSlice.reducer;
