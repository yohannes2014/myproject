
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Detail, DiscSpan, HeroSection, ImageList, ListAlbum, ListDiscrip } from './styled/Album.styles';
const Artist = () => {

const artist = useSelector((state) => state.musics.artist);
const navigate = useNavigate()

const handleArtist = (e) => {

  navigate(`/Artist/${e}`);
 
}



  return (
    <HeroSection>
      {artist.map((item) => (
        <ListAlbum key={item._id} onClick={()=>handleArtist(item._id)} >
          <ImageList>
            <img className='artist_image' src={`http://localhost:5000/images/${item.songs.image}`} alt='i' />
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
