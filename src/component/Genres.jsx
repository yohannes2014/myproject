import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GenresHeader, Detail, DiscSpan, HeroSection, ListDiscrip, ListItem, Button } from '../styled/Album.styles';
import { setMusicPlay } from '../features/musicPlayerSlice';
import { totalMUsicItem } from '../features/musicsSlice';
const Genres = () => {

  const genres = useSelector((state) => state.musics.genres);
  const myMusic = useSelector((state) => state.musics.musics);
  const [selectGenres, setSelectGenres] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState(myMusic);
 const dispatch = useDispatch()

 let total = genres.length

 
 useEffect(()=>{
   dispatch(totalMUsicItem(total));
 },[dispatch, total])
 
  const filterMusic = () => {
    if (selectGenres.length > 0) {
      let tempoMusic = selectGenres.map((selectedCategory) => {
        let temp = myMusic.filter((music) => music.genres === selectedCategory);

        return temp
      });
      setFilteredMusic(tempoMusic.flat());
    }
    else {
      setFilteredMusic([...myMusic])
    }
  }

  const handleFilter = (selectedCategory) => {
    if (selectGenres.includes(selectedCategory)) {

      let filter = selectGenres.filter((gen) => gen !== selectedCategory);
      setSelectGenres(filter);
    }
    else {
      setSelectGenres([...selectGenres, selectedCategory])
    }
  }

  useEffect(() => {

    filterMusic()

  }, [selectGenres]);

const handlePlay = (e) =>{
 dispatch(setMusicPlay(e))

} 

  return (
    <>
      <HeroSection>
        <GenresHeader >
          {genres.map((item) => (
            <div key={item._id} >
              <Button onClick={(e) => handleFilter(item._id)} selected={selectGenres.includes(item._id)} >{item._id}</Button>
            </div>
          ))}
        </GenresHeader>

        {filteredMusic.map((item) => (
          <ListItem key={item._id} onClick={()=>handlePlay(item)}>
          <ListDiscrip >
            <DiscSpan>Genres : {item.genres}</DiscSpan>
            <DiscSpan>Title : {item.title}</DiscSpan>
            <Detail>Artist : {item.artist}</Detail>
          </ListDiscrip>
          </ListItem>
        ))}

      </HeroSection>
    </>
  )
}

export default Genres
