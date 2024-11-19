import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMusicRequest, musicUpdateEnd, musicUpdateSucce, updateMusicRequest } from '../features/musicsSlice';
import { Cancel, Container, FileUpdate, MyImages, Submit } from "../styled/Form.styles";
import { UpdatedSuccessfully } from "./Notification";
import { imageUrl } from "../api/musicApi";

const UpdateMusic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const music = useSelector(state => state.musics.musics.find(music => music._id === id));
  const updated = useSelector((state)=>state.musics.musicUpdate)



  const [title, setTitle] = useState(music.title);
  const [artist, setArtist] = useState(music.artist);
  const [album, setAlbum] = useState(music.album);
  const [genres, setGenres] = useState(music.genres);
  const [image, setImage] = useState(music.image);
  const [imagePreview, setImagePreview] = useState(`${imageUrl}/${music.image}`); 

  useEffect(() => {
    if (image && image instanceof File) {
      setImagePreview(URL.createObjectURL(image)); 
    }
  }, [image]);

  
  const handleImage = (e) =>{
  
    const selectedImage = e.target.files[0];
    setImage(selectedImage); 

  
  }


  const handleUpdate = (e) => {
    e.preventDefault();

 const updatedMusic = {
  id,
  title, 
  artist, 
  album, 
  genres, 
  image
 }
    
    dispatch(updateMusicRequest(updatedMusic))
    dispatch(fetchMusicRequest())

    dispatch(musicUpdateSucce())

    setTimeout(()=>{
   
     
      dispatch(musicUpdateEnd())
    },1000)
    setTimeout(()=>{
   
      navigate('/')
    },1500)
  };

  const handleCancel = () => {
 
      navigate('/');
    
  };

  return (
    <div>
    {updated &&  <UpdatedSuccessfully />}
      <Container>
     
        <form className="form" onSubmit={handleUpdate}>
          <div className="input-box">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name='title' placeholder="Title" autoFocus />
          </div>
          <div className="input-box">
            <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} name='artist' placeholder="Artist" />
          </div>
          <div className="input-box">
            <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} name='album' placeholder="Album" />
          </div>
          <div className="input-box">
            <input type="text" value={genres} onChange={(e) => setGenres(e.target.value)} name='genres' placeholder="Genres" />
          </div>
          <div className="column">
            <div className="input-box">
            <FileUpdate htmlFor="image">
             <MyImages src={imagePreview} alt="Image Preview" />
            </FileUpdate>
              <input type="file" onChange={(e) => handleImage(e)} name='image' accept="image/*" id='image' hidden />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <Submit type="submit">Update Music</Submit>
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

export default UpdateMusic;
