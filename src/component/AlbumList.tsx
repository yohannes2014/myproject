import React from 'react'
import { AlbumCont, ListHeader, DiscTitle, HeroSection, ListDiscrip, ListAlbum, ListofMusic, Detail, AlbumPhoto, AlbumImage,  TitleDisc, Title} from '../styled/Musics.styles'
import { setMusicPlay } from '../features/musicPlayerSlice';
import { musicPlayer } from '../types/musicTypes';
import { imageUrl } from '../api/musicApi';
import { useAlbum } from '../hooks/useMusic';

const AlbumList: React.FC = () => {
  const { dispatch, albumMusics } = useAlbum();

  if (!albumMusics) {
    return <div>Album not found</div>;
  }

  const albumList = albumMusics.songs;


  const handlePlay = (music: musicPlayer) => {
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
            <TitleDisc>
              <Title>{albumTitle.album}</Title>
              <Title>{albumTitle.artist}</Title>
            </TitleDisc>
          </ListHeader>
          {albumList.map((music) => (
            <ListofMusic>
              <ListAlbum key={music._id} onClick={() => handlePlay({ musics: [music], setPlay: true, setPlayer: false })} >
                <ListDiscrip>
                  <DiscTitle>{music.title}</DiscTitle>
                  <Detail>Duration : {music.duration}</Detail>
                </ListDiscrip>
              </ListAlbum>
            </ListofMusic>))}
        </AlbumCont>
      </HeroSection>
    </>
  )
}

export default AlbumList
