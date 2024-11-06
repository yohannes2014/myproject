
import { useSelector } from 'react-redux';
import { Sub } from './styled/Header.Styles';

const SubHeader = () => {


    const routeName = useSelector((state)=>state.musicPlayer.routeName)
    const totalMusicItem = useSelector((state)=>state.musics.totalItem) 
    console.log(totalMusicItem)
 

 
  return (
    <Sub className='sub'>
      <p>Number of {routeName} {totalMusicItem}</p>
    </Sub>
  )
}

export default SubHeader