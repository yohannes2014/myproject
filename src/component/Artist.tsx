
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Detail, DiscSpan, HeroSection, ImageList, ListAlbum, ListDiscrip } from '../styled/Album.styles';
import { useEffect } from 'react';
import { totalMUsicItem } from '../features/musicsSlice';
import { imageUrl } from '../api/musicApi';
import { RootState } from '../types/musicTypes'; 
const Artist = () => {

const artist = useSelector((state:RootState) => state.musics.artist);
const navigate = useNavigate()
const dispatch = useDispatch()
const handleArtist = (e:string) => {

  navigate(`/Artist/${e}`);
 
}
let total = artist.length

 
useEffect(()=>{
  dispatch(totalMUsicItem(total));
},[dispatch, total])




  return (
    <HeroSection>
      {artist.map((item) => (
        <ListAlbum key={item._id} onClick={()=>handleArtist(item._id)} >
          <ImageList>
            <img src={`${imageUrl}/${item.songs[0].image}`} className='AlbumCover' alt='Album'/>
          </ImageList>
          <ListDiscrip className='listDiscrip'>
          <DiscSpan className='artName'>{item._id}</DiscSpan>
          <Detail>{item.songs.length} songs</Detail>
          </ListDiscrip>
         
        </ListAlbum>

      ))
      }
    </HeroSection>


  )
}

export default Artist
