import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import './card.css'
import { AlbumCont, AlbumHeader, Detail, DiscTitle, HeroSection, ListAlbum, ListDiscrip, ListofMusic } from './styled/Album.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';

const ArtistList = () => {
const {artist} = useParams();
const dispatch = useDispatch()

const music = useSelector(state => state.musics.artist.find(music => music._id === artist))

const handlePlay = (e) =>{
 dispatch(setMusicPlay(e))
}

const track = music.songs;

  return (
    <HeroSection>
    <AlbumCont>
      <AlbumHeader>
        <div className='AlbumPhoto'></div>
        <div>
          <h3>Artist </h3>
          <h5>Album Name</h5>
        </div>
      </AlbumHeader>
      <ListofMusic>
      {track.map((music, id)=>(
      <ListAlbum key={id} onClick={()=>handlePlay(music)}>
      <ListDiscrip>
        <DiscTitle>{music.title}</DiscTitle>
        <Detail>Album : {music.album}</Detail>
      </ListDiscrip>
      </ListAlbum>
    ))}
      </ListofMusic>
    </AlbumCont>
  </HeroSection>
  )
}

export default ArtistList