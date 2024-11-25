import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { AlbumCont, AlbumHeader, Detail, DiscTitle, HeroSection, ListAlbum, ListDiscrip, ListofMusic } from '../styled/Album.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { RootState, musicPlayer } from '../types/musicTypes';

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

  return (
    <HeroSection>
      <AlbumCont>
        <AlbumHeader>
          <div className='AlbumPhoto'></div>
          <div>
          </div>
        </AlbumHeader>
        <ListofMusic>
          {track.map((music, id) => (
            <ListAlbum key={id} onClick={() => handlePlay({ setPlay: true, musics: [music], setPlayer: false })}  >
              <ListDiscrip>
                <DiscTitle>{music.title}</DiscTitle>
                <Detail>Album : {music.album}</Detail>
              </ListDiscrip>
            </ListAlbum>
          ))}
        </ListofMusic>
      </AlbumCont>
    </HeroSection>
  )
}

export default ArtistList