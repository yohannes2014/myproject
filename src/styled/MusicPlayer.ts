import styled from "@emotion/styled";
import theme from "../theme/themes";



export const PlayerContainer = styled.div`
    width: ${theme.musicPlayerWidth[0]};
    margin: auto;
    position: fixed;
    background-color: rgba(205, 209, 234, 0.85);
    backdrop-filter:blur(80px);
    height: ${theme.musicPlayerHeight[0]};
    bottom: ${(item)=>(item.hidden ? "-120px" : "10px")};
    left: 0;
    right: 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px; 
    z-index: 100;
    transition: 0.6s ease-in-out;

    ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.musicPlayerWidth[index + 1]};
      height: ${theme.musicPlayerHeight[index + 1]};
    }
  `)}
  `;



export const MusicDiscri = styled.div`
  width:${theme.playerDisc[0]};
  display: flex;

  ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.playerDisc[index + 1]};
    }
  `)}

  `;


export const MusicImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: ce;
  margin-right: 10px;
  border-radius: 5px;
 `;

export const AudioCover = styled.img`
  width: ${theme.playerImageWidth[0]};
  height: ${theme.playerImageHeight[0]};
  border-radius:10px;
  ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.playerImageWidth[index + 1]};
      height: ${theme.playerImageHeight[index + 1]};
    }
  `)}

`;


export const MusicPlay = styled.div`
 
  border-right: solid 4px rgba(168, 166, 172, 0.549);
  border-left: solid 4px rgba(168, 166, 172, 0.549);
  width: ${theme.musicRange[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.musicRange[index + 1]};
    }
  `)}

`;

export const PlayControl = styled.div`

  width: 95%;
  display: flex;
  justify-content: space-between;
  
`;


export const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MusicControl = styled.div`
 
  width:${theme.playerVolume[0]};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.playerVolume[index + 1]};
    }
  `)}

  `;

export const VolumeRange = styled.input`
 width:${theme.VolControl[0]};


 ${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      width: ${theme.VolControl[index + 1]};
    }
  `)}
`;  


export const P = styled.p`
font-size:${theme.playerFont[0]}
${theme.breakpoints.map((bp, index) => `
    @media (max-width: ${bp}) {
      font-size: ${theme.playerFont[index + 1]};
    }
  `)}
`;

export const Name = styled.span`
font-weight:bold;
`;
