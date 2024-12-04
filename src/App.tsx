import './App.css';
import Header from './component/Header';
import Contact from './component/Contact';
import useFetch from './hooks/useFetch';
import { Main } from './styled/Main.styles';
import AudioPlayer from './component/AudioPlayer';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/themes';
import Home from './Page/Home';

const App: React.FC = () => {

useFetch();

  return (
    <>
     <ThemeProvider theme={theme} >
        <Contact />
        <Header />
        <Main>
          <Home />
        </Main>
       <AudioPlayer />
      </ThemeProvider>
      
    </>
  )
}

export default App


