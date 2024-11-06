import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const MusicForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genres: '',
    image: null,
    audio: null,
  });
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      setFormData({ ...formData, image: files[0] });
      setImagePreview(URL.createObjectURL(files[0])); // Create a preview URL
    } else {
      setFormData({ ...formData, [name]: files ? files[0] : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the form data to your redux store or API
    dispatch(/* action to upload music data */);

    // Reset the form and preview
    setFormData({
      title: '',
      artist: '',
      album: '',
      genres: '',
      image: null,
      audio: null,
    });
    setImagePreview('');
    setMessage('Music uploaded successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Music</h2>
      {message && <p>{message}</p>}
      <label>
        Title:
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Album:
        <input
          type="text"
          name="album"
          placeholder="Album"
          value={formData.album}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Genres (comma separated):
        <input
          type="text"
          name="genres"
          placeholder="Genres"
          value={formData.genres}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>
      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}
      <label>
        Audio:
        <input
          type="file"
          name="audio"
          accept="audio/*"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Upload Music</button>
    </form>
  );
};

export default MusicForm;
