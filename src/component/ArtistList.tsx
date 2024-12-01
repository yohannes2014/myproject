import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { AlbumCont, ListHeader, Detail, DiscTitle, HeroSection, ListAlbum, ListDiscrip, ListofMusic, AlbumPhoto, AlbumImage } from '../styled/Album.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { RootState, musicPlayer } from '../types/musicTypes';
import { imageUrl } from '../api/musicApi';

const ArtistList: React.FC = () => {
  
  const { artist } = useParams<{ artist: string }>();

  const dispatch = useDispatch();

  const artistMusics = useSelector((state: RootState) => state.musics.artist.find(music => music._id === artist));

  const handlePlay = (music: musicPlayer) => {
    dispatch(setMusicPlay(music));
  }

  if (!artistMusics) {
    return <div>Album not found</div>;
  }
  const track = artistMusics.songs;
  const trackHeader = artistMusics.songs[0];

  return (
    <HeroSection>
      <AlbumCont>
      <ListHeader>
          <AlbumPhoto>
            <AlbumImage src={`${imageUrl}/${trackHeader.image}`} alt='album' />
          </AlbumPhoto>
          <div>
            <h3>{trackHeader.album}</h3>
            <h5>{trackHeader.artist}</h5>
          </div>
        </ListHeader>
        <ListofMusic>
          {track.map((music, id) => (
            <ListAlbum key={id} onClick={() => handlePlay({ setPlay: true, musics: [music], setPlayer: false })} >
              <ListDiscrip>
                <DiscTitle>{music.title}</DiscTitle>
                <Detail>Duration : {music.duration}</Detail>
              </ListDiscrip>
            </ListAlbum>
          ))}
        </ListofMusic>
      </AlbumCont>
    </HeroSection>
  )
}

export default ArtistList