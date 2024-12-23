import SubHeader from './SubHeader';
import { AddNew, Container, H4, Logo, Nav, Navigation, NavLink, AftBtn, CenBtn, NavBtn, BefOpn } from '../styled/Header.Styles';
import { PiMusicNotesPlusFill } from '../icons/index';
import { useHeader } from '../hooks/useMusic';

const Header = () => {

  const { totalMusic, navigate, isOpen, setIsOpen } = useHeader();

  const AddNewMusic = () => {
    navigate('/AddNew');
  };

  const Home = () => {
    navigate('/');
    setIsOpen(!isOpen);
  };

  const Genres = () => {
    navigate('/Genres');
    setIsOpen(!isOpen);
  };

  const Album = () => {
    navigate('/Album');
    setIsOpen(!isOpen);
  };

  const Artist = () => {
    navigate('/Artist');
    setIsOpen(!isOpen);
  };


  return (
    <Container>
      <Navigation>
        <Logo onClick={() => navigate('/')} className="logo">
          My Music
        </Logo>
        <Nav>
          <NavLink onClick={() => navigate('/')}>Songs</NavLink>
          <NavLink onClick={() => navigate('/Album')}>Albums</NavLink>
          <NavLink onClick={() => navigate('/Artist')}>Artist</NavLink>
          <NavLink onClick={() => navigate('/Genres')}>Genres</NavLink>
        </Nav>

        <div className={!isOpen ? 'DropDownCon' : 'DropDownConClose'}>
          <div className={!isOpen ? 'dropDown' : 'dropDownClose'}>
            <NavLink onClick={Home}>Songs</NavLink>
            <NavLink onClick={Album}>Albums</NavLink>
            <NavLink onClick={Artist}>Artist</NavLink>
            <NavLink onClick={Genres}>Genres</NavLink>
          </div>
        </div>

        <NavBtn className="drop" onClick={() => setIsOpen(!isOpen)}>
          <BefOpn className={isOpen ? 'topOpen' : 'topClose'} />
          <CenBtn className={isOpen ? 'centerOpen' : 'centerClose'} />
          <AftBtn className={isOpen ? 'bottomOpen' : 'bottomClose'} />
        </NavBtn>
        <AddNew onClick={AddNewMusic} className='addMusic' >Add New</AddNew>
        <PiMusicNotesPlusFill className='addBtn' onClick={AddNewMusic} />
        <H4>Songs : {totalMusic}</H4>
      </Navigation>
      <SubHeader />
    </Container>
  );
};

export default Header;
