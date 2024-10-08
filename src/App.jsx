
import './App.css';
import Header from './component/Header';
import styled from '@emotion/styled';
import Contact from './component/styled/Contact';
import Button from './component/styled/Button';
import AllRoutes from './routes/routes';
function App() {


    const Main =  styled.div`
        max-width:1300px; 
       margin:20px auto;
    `;

  return ( 
    <>
 
   <Contact />
    <Header />
    <Button />
    
    <Main>
    
    <AllRoutes />
    </Main> 

    </>
  );
}


export default App
