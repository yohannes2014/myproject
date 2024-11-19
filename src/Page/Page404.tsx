import styled from '@emotion/styled'
import React from 'react'

const Page404: React.FC = () => {
  const Pagenotfound = styled.div`
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  `;
  return (
    <Pagenotfound>Page Not Found</Pagenotfound>
  )
}

export default Page404