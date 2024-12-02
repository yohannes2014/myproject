import { Detail, DiscSpan, HeroSection, ImageList, ListAlbum, ListDiscrip } from '../styled/Musics.styles';
import { useEffect } from 'react';
import { totalMUsicItem } from '../features/musicsSlice';
import { imageUrl } from '../api/musicApi';
import { useArtist } from '../hooks/useMusic';

const Artist = () => {

  const { total, dispatch, artists, handleArtist } = useArtist();

  useEffect(() => {
    dispatch(totalMUsicItem(total));
  }, [dispatch, total])

  return (
    <HeroSection>
      {artists.map((item) => (
        <ListAlbum key={item._id} onClick={() => handleArtist(item._id)} >
          <ImageList>
            <img src={`${imageUrl}/${item.songs[0].image}`} className='AlbumCover' alt='Album' />
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
