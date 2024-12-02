import styled from '@emotion/styled'
import React from 'react'

const Loading:React.FC = () => {
const Load = styled.div`
   font-size:30px; 
   font-weight:bold;
`;

  return (
    <Load>Loading...</Load>
  )
}

export default Loading