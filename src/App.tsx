import './App.css';
import Header from './component/Header';
import Contact from './component/Contact';
import AllRoutes from './routes/routes';
import useFetch from './hooks/useFetch';
import { Main } from './styled/Main.styles';
import AudioPlayer from './component/AudioPlayer';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/themes';

const App: React.FC = () => {

useFetch();

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


