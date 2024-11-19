import { useDispatch, useSelector } from 'react-redux'
import { totalMUsicItem } from '../features/musicsSlice';
import { useEffect } from 'react';
import { DiscSpan, HeroSection, ImageList, ListDiscrip, ListItem } from '../styled/Album.styles';
import { useNavigate } from 'react-router-dom';
import { imageUrl } from '../api/musicApi';
import { RootState } from '../types/musicTypes'; 

const Albums: React.FC = () => {

  const albums = useSelector((state: RootState) => state.musics.albums);
  const navigate = useNavigate()

  let total = albums.length
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(totalMUsicItem(total));
},[dispatch, total])
  
  const  handleClick = (AlbumID:string) =>{
   navigate(`/Album/${AlbumID}`);
  
  }


  return (
    <HeroSection>
      {albums.map((item)=>(
        <ListItem key={item._id} onClick={()=>handleClick(item._id)}>
        <ImageList>
         <img src={`${imageUrl}/${item.songs[0].image}`} className='AlbumCover' alt='Album'/>
        </ImageList>
        <ListDiscrip>
          <DiscSpan>Album : {item._id}</DiscSpan>
          <DiscSpan>Artist : {item.songs[0].artist}</DiscSpan>
          <DiscSpan>{item.songs.length} Songs</DiscSpan>
        </ListDiscrip>
        </ListItem>
      ))}
    </HeroSection>
  )
}

export default Albums