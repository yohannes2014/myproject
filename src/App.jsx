import './App.css';
import Header from './component/Header';
import styled from '@emotion/styled';
import Contact from './component/Contact';
import AllRoutes from './routes/routes';
import { useDispatch } from 'react-redux';
import { setRouteName } from './features/musicPlayerSlice';
import { fetchMusicRequest, fetchTotalRequest, fetchAlbumsRequest, fetchGenresRequest, fetchArtistsRequest } from './features/musicsSlice';
import { useEffect } from 'react';
import AudioPlayer from './component/AudioPlayer';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/themes';

const App = () => {




  const Main = styled.div`
        max-width:1300px; 
       margin:auto;
       min-height:64vh;

    `;
  const dispatch = useDispatch();
  ;
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname.split('/').pop() || 'Songs';




    dispatch(setRouteName(routeName));
  }, [location, dispatch]);



  const fetchMusic = () => {
    dispatch(fetchMusicRequest())
    dispatch(fetchTotalRequest())
    dispatch(fetchAlbumsRequest())
    dispatch(fetchArtistsRequest())
    dispatch(fetchGenresRequest())
    

  }


  useEffect(fetchMusic)

  return (
    <>
      <ThemeProvider theme={theme} >
        <Contact />
          <Header />
        <Main>
          <AllRoutes />
        </Main>
        <AudioPlayer /> 
      </ThemeProvider>
    </>
  );
}

export default App;



