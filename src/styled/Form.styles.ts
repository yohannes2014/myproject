import styled from "@emotion/styled";

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
export const File = styled.label`
    height: 55px;
    width: 500px;
    padding: 10px 55px;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
    background: rgb(158, 196, 165);
    :hover {
    background: rgb(175, 172, 190);
    }
`;
export const FileUpdate = styled.label`
 
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
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
    width:150px;
    height:100px;
`;

export const Submit = styled.button`
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
    :hover {
    background: rgb(88, 56, 250);
    }
`;

export const Cancel = styled.div`
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(143, 143, 142);
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
    background: rgb(105, 105, 105);
    }
`;


