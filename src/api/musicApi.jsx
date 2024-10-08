import axios from "axios";


// fetchMusic
export const fetchMusicApi = () => {
    return axios.get('http://localhost:5000/api/musics'); 
  };
  //Add New music
 export const addMusicApi = (musics) => {
    return axios.post('http://localhost:5000/api/musics', musics); 
  };

  // Update Music
export const fetchMusicUpdateApi = () => {
    return axios.put('http://localhost:5000/api/musics/:id'); 
  };

  // Delete Music
// api/musicApi.js


export const deleteMusicApi = (id) => {
  return axios.delete(`http://localhost:5000/api/musics/${id}`);
};

  // Search Music
export const fetchMusicSearchApi = () => {
    return axios.get('http://localhost:5000/api/musics/:id'); 
  }; 