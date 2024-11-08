import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SubHeader from './SubHeader';
import { AddNew, Container, H4, Logo, Nav, Navigation, NavLink, AftBtn, CenBtn, NavBtn, BefOpn} from './styled/Header.Styles';



const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  const totalMusic = useSelector((state)=>state.musics.total);  
const navigate = useNavigate()

  const AddNewMusic = () =>{
 navigate('/AddNew')
  }

  const Home = () =>{  
    navigate('/');
    setIsOpen(!isOpen);
  }
  const Genres = () =>{
    navigate('/Genres')
    setIsOpen(!isOpen);
  }
  const Album = () =>{
    navigate('/Album')
    setIsOpen(!isOpen);
  }
  const Artist = () =>{
    navigate('/Artist')
    setIsOpen(!isOpen);
  }

    
  return (
    <Container>
    <Navigation>
        <Logo onClick={()=>navigate('/')} className='logo'>My Music</Logo>
        <Nav>
            <NavLink onClick={()=>navigate('/')}>Songs</NavLink>
            <NavLink onClick={()=>navigate('/Album')} >Albums</NavLink>
            <NavLink onClick={()=>navigate('/Artist')} >Artist</NavLink>
            <NavLink onClick={()=>navigate('/Genres')} >Genres</NavLink>
        </Nav>
     
        <div className='DropDownCon' >
        <div className={!isOpen ? 'dropDown' :'dropDownClose'}>
            <NavLink onClick={Home}>Songs</NavLink>
            <NavLink onClick={Album} >Albums</NavLink>
            <NavLink onClick={Artist} >Artist</NavLink>
            <NavLink onClick={Genres} >Genres</NavLink>
            </div>
        </div>
     
        <NavBtn className='drop' onClick={()=>setIsOpen(!isOpen)}>
        <BefOpn className={isOpen ? 'topOpen': 'topClose'} />
        <CenBtn className={isOpen ? 'centerOpen' : 'centerClose'}/>
        <AftBtn  className={isOpen ? 'bottomOpen' : 'bottomClose'} />
        </NavBtn>
        <AddNew onClick={AddNewMusic} >Add New Music</AddNew>
        <H4>Songs : {totalMusic}</H4>
 
    </Navigation>
    <SubHeader />
</Container>
  )
}

export default Header

