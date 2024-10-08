import styled from '@emotion/styled';
import theme from '../theme/themes';

const Header = () => {
    const Container =  styled.div`
        width:100%;
        height:${theme.height[1]};
        top:0;
        left:0;
        right:0;
        position:sticky;
        box-shadow:${theme.shadow.header};
        z-index: 10;
        

    `;
    const Navigation =  styled.span`
        width:${theme.width[0]};
        margin:auto;
        display:flex;
        justify-content:space-between;
        height:100%;
        align-items:center;
        background-color:white;
       
    `;
    const Logo =  styled.h3`
      
        color:${theme.colors.primary};
       
      
    `;
    const Nav =  styled.div`
      
    color:${theme.colors.primary};
    text-justify:center;
  
    display:flex;
    flex-direction:row;

      
        

    `;
    const Menu =  styled.h5`
      
    color:${theme.colors.primary};
    text-justify:center;
    margin:10px;
    cursor: pointer;

  

    `;

    const Search =  styled.div`
      
    color:${theme.colors.primary};
     
    `;
    const H4 =  styled.h4`
      
    color:${theme.colors.primary};
     
    `;

  return (
   <Container>
   <Navigation>
        <Logo>My Music</Logo>
        <Nav>
            <Menu>Songs</Menu>
            <Menu>Albums</Menu>
            <Menu>Artist</Menu>
            <Menu>Genres</Menu>
        </Nav>
        <Search><input type='text' placeholder='search' /></Search>
        <H4>100 Songs</H4>
   </Navigation>
   </Container>
  )
}

export default Header