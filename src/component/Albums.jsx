import { useDispatch, useSelector } from 'react-redux'
import { totalMUsicItem } from '../features/musicsSlice';
import { useEffect } from 'react';
import { DiscSpan, HeroSection, ImageList, ListDiscrip, ListItem } from './styled/Album.styles';
import { useNavigate } from 'react-router-dom';

const Albums = () => {
  const albums = useSelector((state)=>state.musics.albums);
  const navigate = useNavigate()

  let total = albums.length
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(totalMUsicItem(total));
},[dispatch, total])
  
  const  handleClick = (AlbumID) =>{
   navigate(`/Album/${AlbumID}`);
  
  }


  return (
    <HeroSection>
      {albums.map((item, id)=>(
        <ListItem key={id} onClick={()=>handleClick(item._id)}>
        <ImageList>
         <img src={`http://localhost:5000/images/${item.songs[0].image}`} className='AlbumCover' alt='Album'/>
        </ImageList>
        <ListDiscrip>
          <DiscSpan>Album : {item._id}</DiscSpan>
          <DiscSpan>Artist : {item._id}</DiscSpan>
          <DiscSpan>{item.songs.length} Songs</DiscSpan>
        </ListDiscrip>
        </ListItem>
      ))}
    </HeroSection>
  )
}

export default Albums