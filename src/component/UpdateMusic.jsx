import styled from '@emotion/styled';
import "./Addnew.css";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMusicRequest, updateMusicRequest } from '../features/musicsSlice';

const UpdateMusic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const music = useSelector(state => state.musics.musics.find(music => music._id === id));



  const [title, setTitle] = useState(music.title);
  const [artist, setArtist] = useState(music.artist);
  const [album, setAlbum] = useState(music.album);
  const [genres, setGenres] = useState(music.genres);
  const [image, setImage] = useState(music.image);


  const Cancel = styled.div`
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(143, 143, 142);
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background: rgb(105, 105, 105);
    }
  `;

  const Submit = styled.button`
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
    :hover {
      background: rgb(88, 56, 250);
    }
  `;

  const File = styled.label`
    height: 55px;
    width: 500px;
    padding: 10px 55px;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
    background: rgb(158, 196, 165);
    :hover {
      background: rgb(175, 172, 190);
    }
  `;

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
    setTimeout(()=>{
   
      alert("Music succesfully Updated");
      navigate('/')
    },500)
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel?")) {
      navigate('/');
    }
  };

  return (
    <div>
      <section className="container">
     
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
              <File htmlFor='image'>{image ? image.name : 'Update image'}</File>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} name='image' accept="image/*" id='image' hidden />
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
      </section>
    </div>
  );
};

export default UpdateMusic;
