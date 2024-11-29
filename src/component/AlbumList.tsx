import React from 'react'
import { useParams } from 'react-router-dom'
import { AlbumCont, ListHeader, DiscTitle, HeroSection, ListDiscrip, ListAlbum, ListofMusic, Detail, AlbumPhoto, AlbumImage } from '../styled/Album.styles'
import { useDispatch, useSelector } from 'react-redux';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { RootState, musicPlayer} from '../types/musicTypes'; 
import { imageUrl } from '../api/musicApi';

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
const albumTitle = albumMusics?.songs[0];

  return (
<>
   
    <HeroSection>
      <AlbumCont>
        <ListHeader>
          <AlbumPhoto>
            <AlbumImage src={`${imageUrl}/${albumTitle.image}`} alt='album' />
          </AlbumPhoto>
          <div>
            <h3>{albumTitle.album}</h3>
            <h5>{albumTitle.artist}</h5>
          </div>
        </ListHeader>
        {albumList.map((music)=>(
        <ListofMusic>
       
        <ListAlbum key={music._id}  onClick={()=>handlePlay({ musics:[music], setPlay:true, setPlayer:false })} >
        <ListDiscrip>
          <DiscTitle>{music.title}</DiscTitle>
          <Detail>Duration : {music.duration}</Detail>
        </ListDiscrip>                 
        </ListAlbum>
    
        </ListofMusic>  ))}
      </AlbumCont>
    </HeroSection>  
    </>
  )
}

export default AlbumList
