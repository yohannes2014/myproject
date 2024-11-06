import React from 'react'
import { useParams } from 'react-router-dom'
import { AlbumCont, AlbumHeader, DiscTitle, HeroSection, ListDiscrip, ListAlbum, ListofMusic, Detail } from './styled/Album.styles'
import { useDispatch, useSelector } from 'react-redux';
import { setMusicPlay } from '../features/musicPlayerSlice';

const AlbumList = () => {
  const {album} = useParams();
  const dispatch = useDispatch()
  const albumMusics = useSelector((state)=>state.musics.albums.find(music=>music._id === album));

  const albumList = albumMusics.songs

  const handlePlay = (e) => {
    dispatch(setMusicPlay(e));

  }

  return (
    <HeroSection>
      <AlbumCont>
        <AlbumHeader>
          <div className='AlbumPhoto'></div>
          <div>
            <h3>Album Name</h3>
            <h5>Artist </h5>
          </div>
        </AlbumHeader>
        <ListofMusic>
        {albumList.map((music, id)=>(
        <ListAlbum key={id} onClick={()=>handlePlay(music)}>
        <ListDiscrip>
          <DiscTitle>{music.title}</DiscTitle>
          <Detail>Duration : 04:44</Detail>
        </ListDiscrip>
        </ListAlbum>
      ))}
        </ListofMusic>
      </AlbumCont>
    </HeroSection>
  )
}

export default AlbumList
