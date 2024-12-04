import { addMusicRequest, fetchAlbumsRequest, fetchArtistsRequest, fetchGenresRequest, fetchMusicRequest, fetchTotalRequest, musicAddedEnd, musicAddedSucce } from '../features/musicsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { defaultImage } from '../api/musicApi';
import { useNavigate } from 'react-router-dom';
import { Cancel, Container, Input, Submit, Form, InputBox, InputButtonBox, FormButton, FileInput, SubmitButton, CancelButton } from '../styled/Form.styles';
import { AddedSuccesfully } from "./Notification";
import { useMusic } from '../hooks/useMusic';

const NewMusic = () => {
  
  const dispatch = useDispatch();
  const newMusic = useSelector((state) => state.musics.musicAdded)
  const { title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, audio, setAudio, setDuration, musicTime, setMusicTime, duration } = useMusic();


  if (audio) {
    const Music = new Audio(URL.createObjectURL(audio));
    Music.onloadedmetadata = () => {

      const musicDuration = Music.duration
      setMusicTime(musicDuration);
      setDuration(`${Math.floor(musicTime / 60)}:${(`0` + Math.floor(musicTime % 60)).slice(-2)}`)

    };
  }

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
    formData.append('duration', duration);

    dispatch(addMusicRequest(formData));
    dispatch(musicAddedSucce());


    setTimeout(() => {
      dispatch(fetchTotalRequest());
      dispatch(fetchMusicRequest());
      dispatch(fetchAlbumsRequest());
      dispatch(fetchArtistsRequest())
      dispatch(fetchGenresRequest())

    }, 1500)
    setTimeout(() => {
      dispatch(fetchMusicRequest());
      dispatch(musicAddedEnd());
      navigate('/')
    }, 2000)

  }

  const handleCancel = () => {
    navigate('/');
  }

  const navigate = useNavigate()

  return (
    <div>
      {newMusic && <AddedSuccesfully />}
      <Container>
        <Form onSubmit={handleSubmit} className="form" encType='multipart/form-data'>
          <InputBox >
            <Input type="text" onChange={(e) => setTitle(e.target.value)} name='title' placeholder="Title" autoFocus />
          </InputBox>
          <InputBox >
            <Input type="text" onChange={(e) => setArtist(e.target.value)} name='artist' placeholder="Artist" />
          </InputBox>
          <InputBox >
            <Input type="text" onChange={(e) => setAlbum(e.target.value)} name='album' placeholder="Album" />
          </InputBox>
          <InputBox>
            <Input type="text" onChange={(e) => setGenres(e.target.value)} name='genres' placeholder="Genres" />
          </InputBox>
          <InputButtonBox>
            <FormButton>
              <FileInput htmlFor='image'>Music Image</FileInput>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} name='image' accept="image/*" id='image' hidden />
            </FormButton>
            <FormButton>
              <FileInput  htmlFor='music'>Music File</FileInput>
              <input type="file" id='music' onChange={(e) => setAudio(e.target.files[0])} name='audio' accept='audio/*' hidden />
            </FormButton>
          </InputButtonBox>
          <InputButtonBox>
            <SubmitButton>
              <Submit type='submit'>Add New</Submit>
            </SubmitButton>
            <CancelButton>
              <Cancel onClick={handleCancel}>Cancel</Cancel>
            </CancelButton>
          </InputButtonBox>
        </Form>
      </Container>
    </div>
  );
};

export default NewMusic;
