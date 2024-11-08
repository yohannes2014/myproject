import styled from '@emotion/styled';
import MusicCard from '../component/MusicCard';

const Home = () => {
  const Mycard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-around;
  align-items: center;
  
    `;

 return(
  <>
   <Mycard>
     <MusicCard />
   </Mycard>
  </>
  
  )
}

export default Home











