import styled from "@emotion/styled";

export const CardContainer = styled.div`
       display: flex; 
       flex-direction:column;
 `;

export const Mycard = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, ifr);
    box-shadow: 0px 8px 10px 5px rgba(66, 47, 241, 0.263);
    transition: 0.3s ease-in-out;

`;
export const MusicCover = styled.div`
  grid-column: 1/3;
    grid-row: 1/4;
    transition: all 0.5s ease-in-out;
    :hover{
      background-image: url('../../../public/download.png');
      background-size: cover;

    }

`;


/* .myImage
{
    width: 200px;
    height: 160px;
    border-bottom: solid 1px blue;
} */

export const Myimage = styled.img`
  width: 200px;
    height: 160px;
    border-bottom: solid 1px blue;
`;









export const MusicDiscription =  styled.div`
   background-color: #ffffff;
    grid-column: 1/3;
    grid-row: 4/5;
    display: flex;
    justify-content: space-between;
`;
export const ItemDescription = styled.div`
 display: flex;
 flex-direction: column;
`;








