import styled from "@emotion/styled";
import theme from "../theme/themes";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    background-color: rgba(205, 209, 234, 0.3);
    backdrop-filter:blur(4px);
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Form = styled.form`
width:${theme.formWidth[0]};
box-shadow: 0px 0px 6px 0.1px skyblue;
padding:10px;
border-radius:10px;

${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.formWidth[index + 1]};
      
    }
  `)}


`;

export const FileUpdate = styled.label`
 
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top:${theme.formMarginTop[0]};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
    background: rgb(158, 196, 165);
    :hover {
    background: rgb(175, 172, 190);
    }
`;

export const MyImages = styled.img`
    width:${theme.updateImageWidth[0]};
    height:${theme.updateImageHeight[0]};
    border-radius:${theme.formBUttonBorderRadius[0]};
    margin-top:${theme.formMarginTop[0]};

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
         width:${theme.updateImageWidth[index + 1]};
         height:${theme.updateImageHeight[index + 1]};
         border-radius:${theme.formBUttonBorderRadius[index + 1]};
         margin-top:${theme.formMarginTop[index + 1]};
    }
  `)}
`;

export const Submit = styled.button`
    height:100%;
    width:100%;
    color: #fff;
    font-size:${theme.formInputFontSize[0]};
    font-weight: 400;
    border: none;
    cursor: pointer;
    border-radius:${theme.formBUttonBorderRadius[0]};
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
    :hover {
    background: rgb(88, 56, 250);
    }
    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
       height:${theme.formInputHeight[index + 1]};
        font-size:${theme.formInputFontSize[index + 1]};
        border-radius:${theme.formBUttonBorderRadius[index + 1]};
    }
  `)}


`;

export const Cancel = styled.div`
    width:100%;
    color: #fff;
    height:100%;
    font-size:${theme.formInputFontSize[0]};
    font-weight: 400;
    border: none;
    border-radius:${theme.formBUttonBorderRadius[0]};
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(143, 143, 142);
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
    background: rgb(105, 105, 105);
    }
    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
       height:${theme.formInputHeight[index + 1]};
       font-size:${theme.formInputFontSize[index + 1]};
       border-radius:${theme.formBUttonBorderRadius[index + 1]}
    }
  `)}
`;


export const FileInput = styled.label`
    height:100%;
    color: #fff;
    width:100%;
    font-size:${theme.formButtonFontSize[0]};
    font-weight: 400;
    display:flex;
    align-items:center;
    justify-content:center;
    border: none;
    cursor: pointer;
    border-radius:${theme.formBUttonBorderRadius[0]};
    transition: all 0.2s ease;
    background: rgb(158, 196, 165);
    :hover {
    background: rgb(175, 172, 190);
    }

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      font-size:${theme.formButtonFontSize[index + 1]};
      border-radius:${theme.formBUttonBorderRadius[index + 1]};
    }
  `)}

`;


export const InputBox = styled.div`

width:100%;
margin-top:${theme.formMarginTop[0]};

${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      margin-top:${theme.formMarginTop[index + 1]};
    }
  `)}
  `;

export const FormButton = styled.div`
width:${theme.formBUttonWidth[0]};
margin-top:${theme.formMarginTop[0]};
height:${theme.formBUttonHeight[0]};
display:flex; 
justify-content:center;
align-items:center;

${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width:${theme.formBUttonWidth[index + 1]};
      height:${theme.formBUttonHeight[index + 1]};
      margin-top:${theme.formMarginTop[index + 1]};
    }
  `)}



`;  
 

export const SubmitButton = styled.div`
width:${theme.submitButtonWidth[0]};
margin-top:${theme.formMarginTop[0]};
height:${theme.formBUttonHeight[0]};
display:flex;
justify-content:center;
align-items:center;


${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width:${theme.submitButtonWidth[index + 1]};
      height:${theme.formBUttonHeight[index + 1]};
      margin-top:${theme.formMarginTop[index + 1]};
    }
  `)}


`;

export const CancelButton = styled.div`
width:${theme.cancelButtonWidth[0]};
height:${theme.formBUttonHeight[0]};
display:flex;
justify-content:center;
align-items:center;
margin-top:${theme.formMarginTop[0]};

${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
     width:${theme.cancelButtonWidth[index + 1]};
     height:${theme.formBUttonHeight[index + 1]};
     margin-top:${theme.formMarginTop[index + 1]};
    }
  `)}


`;  

export const Input = styled.input`
width:98%;
margin:auto;
height:50px;
font-size:${theme.formInputFontSize[0]};
padding-left:5px;
${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
       height:${theme.formInputHeight[index + 1]};
       font-size:${theme.formInputFontSize[index + 1]};
    }
  `)}
`;


export const InputButtonBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

`;










