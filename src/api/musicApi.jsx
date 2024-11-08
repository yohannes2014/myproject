import axios from "axios";

// Fetch all music
export const fetchMusicApi = () => {
  return axios.get('http://localhost:5000/api/musics'); 
};

// Add new music
export const addMusicApi = (music) => {
  return axios.post('http://localhost:5000/api/musics', music); 
};

// Update music
export const updateMusicApi = (id, music) => {
  return axios.put(`http://localhost:5000/api/musics/${id}`, music); 
};

// Delete music
export const deleteMusicApi = (id) => {
  return axios.delete(`http://localhost:5000/api/musics/${id}`);
};

//Fetch music by ID
export const fetchMusicSingleApi = (id) => {
  return axios.get(`http://localhost:5000/api/musics/${id}`); 
}; 
  
// Fetch total count
export const fetchTotalApi = () => {
  return axios.get('http://localhost:5000/api/total');  
}; 

// Default image

export const defaultImage = () => {
  return axios.get('http://localhost:5000/images/Default.png');  
}; 

// Fetch by Album

export const fetchAlbumApi = () => { 
 return axios.get('http://localhost:5000/api/music/albums/:album');

}
// Group by Album

export const groupByAlbumApi = () =>{
  return axios.get('http://localhost:5000/api/music/albums');
}
// Fetch by Artist

export const fetchArtistApi = () => { 
 return axios.get('http://localhost:5000/api/music/artist/:artist');

}
// Group by Artist

export const groupByArtistApi = () =>{
  return axios.get('http://localhost:5000/api/music/artist');
}

// Fetch by Genres

export const fetchGenresApi = () => { 
 return axios.get('http://localhost:5000/api/music/genres/:genres');

}
// group by Genres

export const groupByGenresApi = () =>{
  return axios.get('http://localhost:5000/api/music/genres');
}

export const imageUrl = 'http://localhost:5000/images'
export const audioUrl = 'http://localhost:5000/audios'