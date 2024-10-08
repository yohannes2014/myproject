import styled from "@emotion/styled";

const Button = () => {




  const Button = styled.button`
      background-color:blue;
      margin-left:30px;
      padding:7px;
      cursor: pointer;
      border-radius:5px;
      color:white;
    `;
  const Cont = styled.div`
    justify-content:center;
    align-items:center;
    display:flex;
    background-color:orange;
    padding:10px;
    position:sticky;
    z-index:10;
    top:85px;
    `;

   
  return (
    <>
    <Cont>
     <Button>Add New Music</Button>

        <Button>Add New Album</Button>
   
    </Cont>

    </>
  )
}

export default Button 