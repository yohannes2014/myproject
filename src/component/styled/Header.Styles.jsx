import styled from "@emotion/styled";
import theme from "../../theme/themes";



export const Container = styled.div`
    width: 100%;
    height: ${theme.navHeight[0]};
    top: 0;
    left: 0;
    right: 0;
    position: sticky;
    box-shadow: ${theme.shadow.header};
    z-index: 10;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: white;   
`;

   
export const Navigation = styled.span`
width: ${theme.breakpoints[0]};
margin: auto;
display: flex;
justify-content: space-between;
height: ${theme.navHeight[0]};
align-items: center;

${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.width[index + 1]};
    }
  `)}

`;

export const Nav = styled.div`
color: ${theme.colors.primary};
display: flex;
flex-direction: row;

@media (max-width: 750px) { 
    display:none;

}

`;

export const H4 = styled.h4`
color: ${theme.colors.primary};
`;

export const Logo = styled.div`
    font-size: 2em;
    text-decoration: none;
    color: rgb(3, 3, 54);
    font-weight: bold;
    cursor: pointer;
    transition:0.3s ease-in-out;
    :hover{
        color: rgb(3, 3, 300)  
    };

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      font-size: ${theme.logoFont[index + 1]};
    }
  `)};
    


`;
export const NavLink = styled.div`
  text-decoration: none;
  margin-left: 10px;
  padding: 3px;
  color: rgb(3, 3, 54);
  font-weight: bold;
  cursor: pointer;
  ::after{
    content:'';
    display:block;
    width:100%;
    height:3px;
    border-radius:2px;
    transition: 0.3s ease-in-out;
  }
 
:hover{
    color: rgb(3, 3, 300); 
}
  :hover::after{
    
    background-color:rgb(3, 3, 54);
  }
`;


export const NavBtn = styled.div`
    cursor: pointer;
   border-radius:2px;
 
    transition:0.3s ease-in-out;
    :hover{
        box-shadow: 0px 0px 8px 1px wheat;
    }
    
    @media (min-width: 750px) { 
  display:none;

}
`;


export const CenBtn = styled.div`
  
   background-color:${theme.colors.primary};
   width:25px;
   height:4px;
   border-radius:4px;
   margin:4px;
`;
export const BefOpn = styled.div`
  
   background-color:${theme.colors.primary};
   width:25px;
   height:4px;
   border-radius:4px;
   margin:4px;
   transition:0.3s ease-in-out;
`;

export const AftBtn = styled.div`
  
   background-color:${theme.colors.primary};
   width:25px;
   height:4px;
   border-radius:4px;
   margin:4px;
`;
export const AddNew = styled.div`
 background-color:${theme.colors.primary};
 color:white;
 padding:4px;
 border-radius:5px;
 cursor: pointer;
 transition: 0.3s ease-in-out;
 :hover{
    background-color:darkblue;
 }

`;

export const Sub = styled.div`
width: ${theme.breakpoints[0]};
margin: auto;
margin-top:10px;
height: ${theme.navHeight[2]};
padding-left:20px;
background-color:white;



${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.width[index + 1]};
    }
  `)}

`;





   
   
