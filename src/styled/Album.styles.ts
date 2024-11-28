import styled from "@emotion/styled";
import theme from "../theme/themes";


interface ButtonProps {
    selected?: boolean; 
  }
  
export const HeroSection = styled.div`
    margin:100px auto;
    width: 90%;
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
export const Detail = styled.div`

    color: rgb(2, 2, 58);
`;
export const DiscTitle = styled.div`
    font-weight: bold;
    font-size:25px;
    color: rgb(2, 2, 58);
    width:600px;
`;

export const AlbumCont = styled.div`
    display:flex;
    flex-direction:column;

`;

export const AlbumHeader = styled.div`
    height:100px;
    width:100%;
    background-color:wheat;
    border-radius: 40px 0px 40px 0px;
    padding-left:50px;
    margin-bottom:20px;
    display:flex;
`;
export const GenresHeader = styled.div`

    width:100%;
    background-color:wheat;
    border-radius: 40px 0px 40px 0px;
    padding:10px 50px;
    margin-bottom:20px;
    display:flex;
    justify-content: center;
    flex-direction: row;
    position: sticky;
    top: 150px;
    z-index: 100px;     
`;

export const ListofMusic = styled.div`
    height:100px;
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
