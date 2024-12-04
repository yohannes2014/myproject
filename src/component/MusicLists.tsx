import { Mycard } from '../styled/Main.styles';
import MusicCard from '../component/MusicCard';
import { HeroSection } from '../styled/Musics.styles';

const MusicLists:React.FC = () => {
    return (
        <HeroSection>
          <Mycard>
            <MusicCard />
          </Mycard>
        </HeroSection>
      )
}

export default MusicLists



