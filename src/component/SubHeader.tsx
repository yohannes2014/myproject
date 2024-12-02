import { Sub } from '../styled/Header.Styles';
import { setRouteName } from '../features/locationSlice';
import { useEffect } from 'react';
import { useSubheader } from '../hooks/useMusic';

const SubHeader = () => {

  const { routeName, totalMusicItem, location, dispatch } = useSubheader();

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