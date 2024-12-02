import { totalMUsicItem } from '../features/musicsSlice';
import { useEffect } from 'react';
import { DiscSpan, HeroSection, ImageList, ListDiscrip, ListItem, MusicCount } from '../styled/Musics.styles';
import { imageUrl } from '../api/musicApi';
import { useAlbum } from '../hooks/useMusic';

const Albums: React.FC = () => {

  const { total, dispatch, navigate, albums } = useAlbum()

  useEffect(() => {
    dispatch(totalMUsicItem(total));
  }, [dispatch, total])

  const handleClick = (AlbumID: string) => {
    navigate(`/Album/${AlbumID}`);
  }
  
  return (
    <HeroSection>
      {albums.map((item) => (
        <ListItem key={item._id} onClick={() => handleClick(item._id)}>
          <ImageList>
            <img src={`${imageUrl}/${item.songs[0].image}`} className='AlbumCover' alt='Album' />
          </ImageList>
          <ListDiscrip>
            <DiscSpan>Album : {item._id}</DiscSpan>
            <DiscSpan>Artist : {item.songs[0].artist}</DiscSpan>
            <MusicCount>{item.songs.length} Songs</MusicCount>
          </ListDiscrip>
        </ListItem>
      ))}
    </HeroSection>
  )
}

export default Albums