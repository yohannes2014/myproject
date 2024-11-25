import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenresHeader, Detail, DiscSpan, HeroSection, ListDiscrip, ListItem, Button } from '../styled/Album.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { totalMUsicItem } from '../features/musicsSlice';
import { RootState, musicPlayer , Musics } from '../types/musicTypes';

const Genres: React.FC = () => {
  
  const genres = useSelector((state: RootState) => state.musics.genres);
  const myMusic = useSelector((state: RootState) => state.musics.musics);
  const [selectGenres, setSelectGenres] = useState<string[]>([]);  
  const [filteredMusic, setFilteredMusic] = useState<Musics[]>(myMusic);  
  const dispatch = useDispatch();

  let total = genres.length;

  useEffect(() => {
    dispatch(totalMUsicItem(total));
  }, [dispatch, total]);

  const filterMusic = () => {
    if (selectGenres.length > 0) {
      const tempoMusic = selectGenres.map((selectedCategory) => {
        const temp = myMusic.filter((music) => music.genres === selectedCategory);
        return temp;
      });
      setFilteredMusic(tempoMusic.flat());
    } else {
      setFilteredMusic([...myMusic]);
    }
  };

  const handleFilter = (selectedCategory: string) => {
    if (selectGenres.includes(selectedCategory)) {
      const filter = selectGenres.filter((gen) => gen !== selectedCategory);
      setSelectGenres(filter);
    } else {
      setSelectGenres([...selectGenres, selectedCategory]);
    }
  };

  useEffect(() => {
    filterMusic();
  }, [selectGenres]);

  const handlePlay = (music:musicPlayer) => {
    dispatch(setMusicPlay(music));
  };

  return (
    <>
      <HeroSection>
        <GenresHeader>
          {genres.map((item) => (
            <div key={item._id}>
              <Button onClick={() => handleFilter(item._id)} selected={selectGenres.includes(item._id)}>
                {item._id}
              </Button>
            </div>
          ))}
        </GenresHeader>
        {filteredMusic.map((music) => (
          <ListItem key={music._id}  onClick={()=>handlePlay({ setPlay: true, musics:[music] , setPlayer:false })}  >
            <ListDiscrip>
              <DiscSpan>Genres : {music.genres}</DiscSpan>
              <DiscSpan>Title : {music.title}</DiscSpan>
              <Detail>Artist : {music.artist}</Detail>
            </ListDiscrip>
          </ListItem>
        ))}
      </HeroSection>
    </>
  );
};

export default Genres;
