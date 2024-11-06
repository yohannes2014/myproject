import styled from '@emotion/styled';
import "./Addnew.css";
import {addMusicRequest, fetchMusicRequest, fetchTotalRequest} from '../features/musicsSlice'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { defaultImage } from '../api/musicApi';
import { useNavigate } from 'react-router-dom';

const NewMusic = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genres, setGenres] = useState('');
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');

 

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
    width: 100%;
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


  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
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
    
    
   setTimeout(()=>{
    alert("Music succesfully added");
    dispatch(fetchTotalRequest())
    dispatch(fetchMusicRequest());
    navigate('/')
  },100)
  }
    
  

  const handleCancel = () =>{
    navigate(('/'))
    }

const navigate = useNavigate()

  return (
    <div>
      <section className="container">
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
      </section>
    </div>
  );
};

export default NewMusic;
