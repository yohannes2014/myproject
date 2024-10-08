import styled from '@emotion/styled'
import  "./Addnew.css"
import { addMusicRequest} from "../redux/actions/MusicActions"
import { useDispatch} from 'react-redux'
import { useState } from 'react'

const AddNewMusic = () => {
  const dispatch = useDispatch();
  const [title,setTitle] = useState('Unknown')
  const [artist,setArtist] = useState('Unknown')
  const [album,setAlbum] = useState('Unknown')
  const [genres,setGenres] = useState('Unknown')
  const [image,setImage] = useState('Default')
  const [newmusic,setNewMusic] = useState('Unknown')
 

 /*  const loading = useSelector((state)=>state.music.loading);
  const error = useSelector((state)=>state.music.error); */

  const Card = styled.div`
  position:fixed;
  margin-top:450px;
  z-index:100;
`;
const Cancel = styled.div`
height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  border-radius:10px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgb(143, 143, 142);
  display:flex;
  justify-content:center;
  align-items:center;

  :hover{
  
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
  border-radius:10px;
  transition: all 0.2s ease;
  background: rgb(130, 106, 251);
  :hover{
  
      background: rgb(88, 56, 250)
  }
`;
const File = styled.label`
 height: 55px;
  width: 100%;
  padding:10px 55px;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  border-radius:10px;
  transition: all 0.2s ease;
  background: rgb(158, 196, 165);
  :hover{
  
      background: rgb(175, 172, 190)
  }
`;

const handleSubmit = (e) => {
  e.preventDefault();
const myMusic = {
  title, album, image, artist, genres, newmusic}
  
 dispatch(addMusicRequest(myMusic));

};

return (
  <>
 <Card>
<section className="container">
    <header>New Music</header>
    <form onSubmit={handleSubmit} className="form">
      <div className="input-box">
        <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Title" autoFocus/>
      </div>
      <div className="input-box">
        <input type="text" onChange={(e) => setArtist(e.target.value)}  placeholder="Artist" />
      </div>
      <div className="input-box">
        <input type="text" onChange={(e) => setAlbum(e.target.value)}    placeholder="Album" />
      </div>
      <div className="input-box">
        <input type="text" onChange={(e) => setGenres(e.target.value)}  placeholder="Genres"  />
      </div>
      <div className="column">
        <div className="input-box">
          <File htmlFor='image'>Music Image</File>
          <input type="file" onChange={(e) => setImage(e.target.value)}   id='image' hidden/>
        </div>
        <div className="input-box">
          <File htmlFor='music'>Music File</File>
          <input type="file" id='music' onChange={(e) => setNewMusic(e.target.value)} multiple hidden />
        </div>
      </div>
      <div className="column">
        <div className="input-box">
        <Submit type='submit'>Add New </Submit>
        </div>
        <div className="input-box">
         <Cancel >Cancel</Cancel>
        </div>
      </div>
   
    </form>
  </section> 
  </Card>
  </>
)
}

export default AddNewMusic

