import './App.css';
import Header from './component/Header';
import Contact from './component/Contact';
import AllRoutes from './routes/routes';
import { useDispatch } from 'react-redux';
import { fetchMusicRequest, fetchTotalRequest, fetchAlbumsRequest, fetchGenresRequest, fetchArtistsRequest } from './features/musicsSlice';
import { Main } from './styled/Main.styles';
import AudioPlayer from './component/AudioPlayer';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/themes';
import { useEffect } from 'react';


const App: React.FC = () => {

const dispatch = useDispatch();

const fetchMusic = () => {
  dispatch(fetchMusicRequest())
  dispatch(fetchTotalRequest())
  dispatch(fetchAlbumsRequest())
  dispatch(fetchArtistsRequest())
  dispatch(fetchGenresRequest())
}


useEffect(()=>{
  fetchMusic();
})

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
  )
}

export default App


