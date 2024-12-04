import React from 'react'
import { AlbumCont, ListHeader, Detail, DiscTitle, HeroSection, ListAlbum, ListDiscrip, ListofMusic, AlbumPhoto, AlbumImage, TitleDisc, Title } from '../styled/Musics.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { musicPlayer } from '../types/musicTypes';
import { imageUrl } from '../api/musicApi';
import { useArtist } from '../hooks/useMusic';

const ArtistList: React.FC = () => {
  const { dispatch, artistMusics } = useArtist()

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
          <TitleDisc>
            <Title>{trackHeader.album}</Title>
            <Title>{trackHeader.artist}</Title>
          </TitleDisc>
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