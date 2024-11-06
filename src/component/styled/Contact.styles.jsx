import styled from "@emotion/styled";
import theme from "../../theme/themes";


export const ContactContainer = styled.div`
margin:auto;
width:${theme.breakpoints[0]};
height:${theme.contactHeight[0]};
display:flex;
justify-content:space-between;
align-items:center;


${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.width[index + 1]};
      height:${theme.contactHeight[index + 1]};
    }
  `)}


  
`;
export const Link = styled.a`

font-size:${theme.contactFont[0]};   
font-weight:bold;
text-decoration:none;
transition:0.3s ease-in-out;
contactFont
:hover{
    color:orange;
};
${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.contactFont[index + 1]};
    }
  `)}



`;
