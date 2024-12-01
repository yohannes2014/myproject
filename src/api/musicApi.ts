import axios, { AxiosResponse } from 'axios';
import { Music } from '../types/musicTypes';

interface ApiResponse<Music> {
  data: Music;
}

const render_url = 'https://myprojectserver-ivm0.onrender.com'

// Fetch all music
export const fetchMusicApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/musics`);
};

// Add new my music
export const addMusicApi = (music: Music): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.post(`${render_url}/api/musics`, music);
};

// Update my music
export const updateMusicApi = (id: string, music: Music): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.put(`${render_url}/api/musics/${id}`, music);
};

// Delete music
export const deleteMusicApi = (id: string): Promise<AxiosResponse<ApiResponse<null>>> => {
  return axios.delete(`${render_url}/api/musics/${id}`);
};

// Fetch music by ID
export const fetchMusicSingleApi = (id: string): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.get(`${render_url}/api/musics/${id}`);
};

// Fetch total count
export const fetchTotalApi = (): Promise<AxiosResponse<ApiResponse<number>>> => {
  return axios.get(`${render_url}/api/total`);
};

// Default image
export const defaultImage = (): Promise<AxiosResponse> => {
  return axios.get(`${render_url}/images/Default.png`);
};

// Fetch by Album
export const fetchAlbumApi = (album: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/albums/${album}`);
};

// Group by Album
export const groupByAlbumApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/albums`);
};

// Fetch by Artist
export const fetchArtistApi = (artist: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/artist/${artist}`);
};

// Group by Artist
export const groupByArtistApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/artist`);
};

// Fetch by Genres
export const fetchGenresApi = (genres: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/genres/${genres}`);
};

// Group by Genres
export const groupByGenresApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`${render_url}/api/music/genres`);
};

export const imageUrl = `${render_url}/images`;
export const audioUrl = `${render_url}/audios`;
