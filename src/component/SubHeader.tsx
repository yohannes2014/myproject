import { useSelector } from 'react-redux';
import { Sub } from '../styled/Header.Styles';

const SubHeader = () => {


    const routeName = useSelector((state:any)=>state.musicPlayer.routeName)
    const totalMusicItem = useSelector((state:any)=>state.musics.totalItem) 
//NB this is filter to avoid spechal chracters 
    const filteredName = decodeURIComponent(routeName);
  return (
    <Sub className='sub'>
      <p>Number of {filteredName} {totalMusicItem}</p>
    </Sub>
  )
}

export default SubHeader