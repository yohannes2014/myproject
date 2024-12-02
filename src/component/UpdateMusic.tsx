import { useEffect } from 'react';
import { fetchMusicRequest, musicUpdateEnd, musicUpdateSucce, updateMusicRequest } from '../features/musicsSlice';
import { Cancel, Container, FileUpdate, MyImages, Submit } from "../styled/Form.styles";
import { UpdatedSuccessfully } from "./Notification";
import { useUpdate } from '../hooks/useMusic';

const UpdateMusic = () => {

  const { navigate, dispatch, id, updated, title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, imagePreview, setImagePreview
  } = useUpdate();

  useEffect(() => {
    if (image && image instanceof File) {
      setImagePreview(URL.createObjectURL(image));
    }
  }, [image, setImagePreview]);

  const handleImage = (e: any) => {

    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  }

  const handleUpdate = (e: any) => {
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

    setTimeout(() => {

      dispatch(fetchMusicRequest())
      dispatch(musicUpdateEnd())
    }, 1500)
    setTimeout(() => {

      navigate('/')
    }, 1800)
  };

  const handleCancel = () => {

    navigate('/');
  };

  return (
    <div>
      {updated && <UpdatedSuccessfully />}
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
