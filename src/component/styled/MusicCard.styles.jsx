import styled from "@emotion/styled";
import theme from "../../theme/themes";



export const Card = styled.div`
      width:220px;
      border-radius:20px;
      box-shadow:${theme.shadow.card};
      margin:5px;
      display:flex;
      flex-direction:column;
      padding:5px;

  
      `;
export const Overlay = styled.div`

      position:absolute;
      width:210px;
      height:180px;
      border-radius:10px;
      opacity: 0;
      display:flex;
      flex-direction:row;
      cursor: pointer;
    
     
    
     

      :hover{
    
       opacity: 1;
     
      }

  
      `;


export const Mycard = styled.div`
    width: 185px;
    height: 100px;
    margin: 20px;
    border-radius:5px;
    cursor: pointer;
    


`;
export const Discription = styled.div`
   width:95%;
    cursor: pointer;
    margin:auto;
    margin-top:35px;
    background-color:rgba(245, 222, 179, 0.322);
    padding-left:5px;

`;
export const Music = styled.span`
  display:block;
  color:${theme.colors.primary}
  
`; 
export const MyBtns = styled.span`
  display:flex;
  width:15%;
  flex-direction:column;
  justify-content:start;
  align-items:start;

`; 
export const Edit = styled.button`
width:35px;
cursor: pointer;
color:white;
border:none;
border-radius:5px;
font-size:1.5em;
background-color: rgb(174, 164, 164);
color:white;
margin-top:10px;
transition: 0.3s ease-in-out;
:hover{
    background-color: rgb(137, 131, 131);
}
`;

export const Delete = styled.button`
width:35px;
cursor: pointer;
color:white;
border:none;
border-radius:3px;
margin-top:20px;
font-size:1.5em;
transition: 0.3s ease-in-out;

background-color: rgb(165, 8, 8);
:hover{
    background-color: rgb(209, 10, 10);
}

`;
export const PlayCard = styled.div`
width:80%;
display:flex;
align-items:center;
justify-content:center;


`;