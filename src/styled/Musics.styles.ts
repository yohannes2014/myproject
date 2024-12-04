import styled from "@emotion/styled";
import theme from "../theme/themes";


interface ButtonProps {
    selected?: boolean; 
  }
  
export const HeroSection = styled.div`
    margin:70px auto;
    width: 95%;
    padding: 10px;
`;

export const ListItem = styled.div`
    width: 100%;
    height: 80px;
    background-image: linear-gradient(45deg, rgb(211, 211, 249) , rgba(225, 221, 250, 0.712), rgb(255, 255, 255));
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    display: flex;
    margin: 3px;

    :hover{
        box-shadow: 0px 0px 12px 1px rgba(16, 16, 215, 0.418);
    }
`;

export const ImageList = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin: 5px;
`;

export const ListDiscrip = styled.div`
    height: 75px;
    margin-left: 20px;
    width: 100px;
    display: flex;
    width: 200px;
    justify-content: space-between;
    flex-direction: column;
 
`;
export const DiscSpan = styled.div`
    font-weight: bold;
    color: rgb(2, 2, 58);
    width:300px;
`;
export const MusicCount = styled.div`
    
    color: rgb(2, 2, 58);
    width:300px;
`;
export const Detail = styled.div`

    color: rgb(2, 2, 58);
`;
export const DiscTitle = styled.div`
    font-weight: bold;
    font-size:${theme.listDiscTitle[0]};
    color: rgb(2, 2, 58);
    width:${theme.listHeaderWidth[0]};

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.listHeaderWidth[index + 1]};
      font-size:${theme.listDiscTitle[index + 1]};
    
    }
  `)}
`;

export const AlbumCont = styled.div`
    display:flex;
    flex-direction:column;

`;

export const ListHeader = styled.div`
   
    width:${theme.listHeaderWidth[0]};
    background-color:#eae6f7;
    border-radius:10px;
    padding-left:50px;
    margin:10px auto;
    display:flex;



    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.listHeaderWidth[index + 1]};
      height: ${theme.listHeaderHeight[index + 1]};
    
    }
  `)}
   
`;

export const GenresList = styled.div`
margin-top:30px;
`;
export const AlbumPhoto = styled.div`
 
    width: ${theme.listPhotoWidth[0]};
    height: ${theme.listPhotoHeight[0]};
    border-radius: 15px;
    margin-right: 20px;

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.listPhotoWidth[index + 1]};
      height: ${theme.listPhotoHeight[index + 1]};
    
    }
  `)}
  `;

  export const TitleDisc = styled.div`
  height:100%;
  padding:5px;

 
  `;

  export const Title = styled.p`
  font-weight:bold;
  font-size:${theme.listTitleFont[0]};


  ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      font-size: ${theme.listTitleFont[index + 1]};
      
    
    }
  `)}


  
  `; 

  export const AlbumImage = styled.img`
   width: ${theme.listPhotoWidth[0]};
   height: ${theme.listPhotoHeight[0]};
   border-radius:10px;
   margin-top:2px;

   ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.listPhotoWidth[index + 1]};
      height: ${theme.listPhotoHeight[index + 1]};
    
    }
  `)}

  `;


export const GenresHeader = styled.div`

    width:80%;
    border-bottom:solid wheat 1px;
    padding:10px 50px;
    display:flex;
    justify-content: center;
    flex-direction: row;
    position: sticky;
    background: linear-gradient(to top, #eae6f7, white);
    top:135px;
    z-index: 10px;  
    margin:auto; 
    flex-wrap:wrap;  
`;

export const ListofMusic = styled.div`
    height:${theme.listofMusicHeight[0]};
    width:100%;

    
`;

export const ListAlbum = styled.div`
    width: 100%;
    height: 80px;
    box-shadow:${theme.shadow.list};
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    display: flex;
    margin: 7px;

    :hover{
        box-shadow: 0px 0px 12px 1px rgba(16, 16, 215, 0.418);
    }
`;

export const Button = styled.button<ButtonProps>`
    padding:5px 10px;
    margin:5px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? `${theme.colors.primary}` : '#fff')};
    color: ${({ selected }) => (selected ? '#fff' : '#000')};
    border-radius: 5px;
`;
