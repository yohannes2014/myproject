
import {addMusicRequest, fetchMusicRequest, fetchTotalRequest, musicAddedEnd, musicAddedSucce} from '../features/musicsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { defaultImage } from '../api/musicApi';
import { useNavigate } from 'react-router-dom';
import { Cancel, Container, File, Submit } from '../styled/Form.styles';
import { AddedSuccesfully } from "./Notification";
import { useNewMusic } from '../hooks/useMusic';

const NewMusic = () => {
  const dispatch = useDispatch();
  const newMusic = useSelector((state)=>state.musics.musicAdded);
  const  {title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, audio, setAudio} = useNewMusic()

 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!title || !artist || !album || !genres || !audio) {
      alert('Please fill out all fields and select files.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('album', album);
    formData.append('artist', artist);
    formData.append('genres', genres);
    formData.append('image', image || defaultImage);
    formData.append('audio', audio);
    

    dispatch(addMusicRequest(formData));
    dispatch(musicAddedSucce())
   

    
   setTimeout(()=>{
  
    dispatch(fetchMusicRequest());
    dispatch(fetchTotalRequest());
    dispatch(musicAddedEnd());
   
  
  },1000)
   setTimeout(()=>{
   navigate('/') 
  },1500)

  }
    
  

  const handleCancel = () =>{
    navigate(('/'))
    }

const navigate = useNavigate()

  return (
    <div>
   {newMusic && <AddedSuccesfully />}
      <Container>
        <form onSubmit={handleSubmit} className="form" encType='multipart/form-data'>
          <div className="input-box">
            <input type="text" onChange={(e) => setTitle(e.target.value)} name='title'  placeholder="Title" autoFocus />
          </div>
          <div className="input-box">
            <input type="text" onChange={(e) => setArtist(e.target.value)} name='artist' placeholder="Artist" />
          </div>
          <div className="input-box">
            <input type="text" onChange={(e) => setAlbum(e.target.value)} name='album' placeholder="Album" />
          </div>
          <div className="input-box">
            <input type="text" onChange={(e) => setGenres(e.target.value)} name='genres' placeholder="Genres" />
          </div>
          <div className="column">
            <div className="input-box">
              <File htmlFor='image'>Music Image</File>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} name='image' accept="image/*" id='image' hidden />
            </div>
            <div className="input-box">
              <File htmlFor='music'>Music File</File>
              <input type="file" id='music' onChange={(e) => setAudio(e.target.files[0])} name='audio' accept='audio/*' hidden />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <Submit type='submit'>Add New</Submit>
            </div>
            <div className="input-box">
              <Cancel onClick={handleCancel}>Cancel</Cancel>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default NewMusic;
