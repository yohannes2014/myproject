import styled from '@emotion/styled';
import MusicCard from '../component/styled/MusicCard';
import AddNewMusic from '../component/AddNewMusic';



const Home = () => {
    const Mycard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
  
    `;
  return (
<>
    <Mycard>
      <MusicCard />

      <AddNewMusic />

    </Mycard>
</>
  
  );
}

export default Home