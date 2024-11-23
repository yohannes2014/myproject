
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
      state.setPlayer = action.payload.setPlayer;
      state.musics = action.payload.musics; 
    },

    pauseSong(state) {
      state.setPlay = false; // Pause the song
    },

    closePlayer(state) {
      state.setPlayer = false; // Close the music player (set to false)
      state.musics = [myMusic]; // Clear the current music
    },
  },
});

// Export the actions
export const {
  pauseSong,
  closePlayer,
  setMusicPlay,
} = musicPlayerSlice.actions;

// Export the reducer
export default musicPlayerSlice.reducer;
