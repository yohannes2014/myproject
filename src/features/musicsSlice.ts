import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicsState, Musics, Artist, Genres } from '../types/musicTypes';

const initialState: MusicsState = {
  musics: [],
  albums: [],
  artist: [],
  genres: [],
  loading: false,
  error: null,
  total: 0,
  currentMusic: null,
  totalItem: 0,
  removeMusic: false,
  musicAdded: false,
  musicUpdate: false,
  duration: '0:00',


};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    fetchMusicRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMusicSuccess: (state, action: PayloadAction<Musics[]>) => {
      state.loading = false;
      state.musics = action.payload;

    },
    fetchMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add Music
    addMusicRequest: (state) => {
      state.error = null;
    },
    addMusicSuccess: (state, action) => {
      state.musics.push(action.payload);
    },
    addMusicFailure: (state, action) => {
      state.error = action.payload;
    },

    updateMusicRequest: (state, action: PayloadAction<any>) => {

      state.loading = true;
      state.error = null;
    },
    updateMusicSuccess: (state, action: PayloadAction<any>) => {
      const updatedMusic = action.payload;
      state.musics = state.musics.map((music) =>
        music._id === updatedMusic.id ? updatedMusic : music
      );
      state.musicUpdate = true;
      state.loading = false;
    },
    updateMusicFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Delete Music
    deleteMusicRequest: (state, action: PayloadAction<string>) => {
      state.error = null;
    },
    deleteMusicSuccess: (state, action) => {
      state.musics = state.musics.filter(music => music._id !== action.payload);
    },
    deleteMusicFailure: (state, action) => {
      state.error = action.payload;
    },

    // Set Current Music
    setCurrentRequest: (state) => {
      state.error = null;
    },
    setCurrentSuccess: (state, action) => {
      const musicId = action.payload._id;
      state.currentMusic = state.musics.find(music => music._id === musicId) || null;
    },
    setCurrentFailure: (state, action) => {
      state.error = action.payload;
    },

    // Fetch Total Music
    fetchTotalRequest: (state) => {
      state.error = null;
    },
    fetchTotalSuccess: (state, action) => {
      state.total = action.payload;
    },
    fetchTotalFailure: (state, action) => {
      state.error = action.payload;
    },

    // Fetch Albums
    fetchAlbumsRequest: (state) => {
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

    // Fetch Artists
    fetchArtistsRequest: (state) => {
      state.error = null;
    },
    fetchArtistsSuccess: (state, action: PayloadAction<Artist[]>) => {
      state.loading = false;
      state.artist = action.payload;
    },
    fetchArtistsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch Genres
    fetchGenresRequest: (state) => {
      state.error = null;
    },
    fetchGenresSuccess: (state, action: PayloadAction<Genres[]>) => {
      state.loading = false;
      state.genres = action.payload;
    },
    fetchGenresFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Other Actions
    totalMUsicItem: (state, action: PayloadAction<number>) => {
      state.totalItem = action.payload;
    },
    findMuiscById: (state, action) => {
      state.currentMusic = state.musics.find(music => music._id === action.payload) || null;
    },
    setRemoveCard: (state) => {
      state.removeMusic = true;
    },
    cancelRemoveCard: (state) => {
      state.removeMusic = false;
    },
    musicAddedSucce: (state) => {
      state.musicAdded = true;
    },
    musicAddedEnd: (state) => {
      state.musicAdded = false;
    },
    musicUpdateSucce: (state) => {
      state.musicUpdate = true;
    },
    musicUpdateEnd: (state) => {
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
  totalMUsicItem,
  findMuiscById,
  setRemoveCard,
  cancelRemoveCard,
  musicAddedSucce,
  musicAddedEnd,
  musicUpdateSucce,
  musicUpdateEnd,
} = musicSlice.actions;

export default musicSlice.reducer;
