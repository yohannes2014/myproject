import axios, { AxiosResponse } from 'axios';

// Define the Music type
interface Music {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  image:string;
  audio:string;
  
}

interface ApiResponse<T> {
  data: T;
}

// Fetch all music
export const fetchMusicApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get('http://localhost:5000/api/musics');
};

// Add new music
export const addMusicApi = (music: Music): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.post('http://localhost:5000/api/musics', music);
};

// Update music
export const updateMusicApi = (id: string, music: Music): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.put(`http://localhost:5000/api/musics/${id}`, music);
};

// Delete music
export const deleteMusicApi = (id: string): Promise<AxiosResponse<ApiResponse<null>>> => {
  return axios.delete(`http://localhost:5000/api/musics/${id}`);
};

// Fetch music by ID
export const fetchMusicSingleApi = (id: string): Promise<AxiosResponse<ApiResponse<Music>>> => {
  return axios.get(`http://localhost:5000/api/musics/${id}`);
};

// Fetch total count
export const fetchTotalApi = (): Promise<AxiosResponse<ApiResponse<number>>> => {
  return axios.get('http://localhost:5000/api/total');
};

// Default image
export const defaultImage = (): Promise<AxiosResponse> => {
  return axios.get('http://localhost:5000/images/Default.png');
};

// Fetch by Album
export const fetchAlbumApi = (album: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`http://localhost:5000/api/music/albums/${album}`);
};

// Group by Album
export const groupByAlbumApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get('http://localhost:5000/api/music/albums');
};

// Fetch by Artist
export const fetchArtistApi = (artist: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`http://localhost:5000/api/music/artist/${artist}`);
};

// Group by Artist
export const groupByArtistApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get('http://localhost:5000/api/music/artist');
};

// Fetch by Genres
export const fetchGenresApi = (genres: string): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get(`http://localhost:5000/api/music/genres/${genres}`);
};

// Group by Genres
export const groupByGenresApi = (): Promise<AxiosResponse<ApiResponse<Music[]>>> => {
  return axios.get('http://localhost:5000/api/music/genres');
};

export const imageUrl = 'http://localhost:5000/images';
export const audioUrl = 'http://localhost:5000/audios';
