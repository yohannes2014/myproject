import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  musics: [],
  isPlaying: false,
  musicPlayer: true,
  routeName:'',
  

};

const musicPlayerSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {

    setMusicPlay(state, action) {
      state.isPlaying = action.payload;
      state.musicPlayer = false;
      state.musics = action.payload;
      
    },

    pauseSong(state) {
      state.isPlaying = false;
    },

    closePlayer(state) {
      state.musicPlayer = true;
      state.musics = [];
    },
    pathName(state, action){
      state.pathName = action.payload
    },
    setRouteName(state,action){
      state.routeName = action.payload
    }


  },
});

export const {
  pauseSong,
  closePlayer,
  setMusicPlay,
  setRouteName

} = musicPlayerSlice.actions

export default musicPlayerSlice.reducer;





