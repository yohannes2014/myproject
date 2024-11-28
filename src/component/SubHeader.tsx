import { useDispatch, useSelector } from 'react-redux';
import { Sub } from '../styled/Header.Styles';
import { RootState } from '../types/musicTypes';
import { useLocation } from 'react-router-dom';
import { setRouteName } from '../features/locationSlice';
import { useEffect } from 'react';


const SubHeader = () => {
  
    const routeName = useSelector((state:RootState)=>state.location.routeName)
    const totalMusicItem = useSelector((state:any)=>state.musics.totalItem);

    const location = useLocation();
    const dispatch = useDispatch();

useEffect(() => {
  const routeName = location.pathname.split('/').pop() || 'Songs';
  dispatch(setRouteName(routeName));

}, [location, dispatch]);




    const filteredName = decodeURIComponent(routeName); 
  return (
    <Sub className='sub'>
      <p>Number of {filteredName} {totalMusicItem}</p>
    </Sub>
  )
}

export default SubHeader