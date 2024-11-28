import React from 'react'
import { useParams } from 'react-router-dom'
import { AlbumCont, AlbumHeader, DiscTitle, HeroSection, ListDiscrip, ListAlbum, ListofMusic, Detail } from '../styled/Album.styles'
import { useDispatch, useSelector } from 'react-redux';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { RootState, musicPlayer} from '../types/musicTypes'; 

const AlbumList: React.FC = () => {

  const { album } = useParams<{ album: string }>();

  const dispatch = useDispatch()
  const albumMusics = useSelector((state: RootState) => state.musics.albums.find(music => music._id === album));

  if (!albumMusics) {
    return <div>Album not found</div>;
  }

  const albumList = albumMusics.songs;

  const handlePlay = (music:musicPlayer) => {
    dispatch(setMusicPlay(music));
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
        {albumList.map((music)=>(
        <ListAlbum key={music._id}  onClick={()=>handlePlay({ musics:[music], setPlay:true, setPlayer:false })}   >
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
