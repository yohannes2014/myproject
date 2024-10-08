import styled from '@emotion/styled';
import  "./Addnew.css";
import { useDispatch } from 'react-redux'

const AddNewAlbum = () => {
  const dispatch = useDispatch();
    const Card = styled.div`
    position:fixed;
    margin-top:450px;
    z-index:100;
  `;
  const Cancel = styled.div`
  height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    border-radius:10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(143, 143, 142);
    display:flex;
    justify-content:center;
    align-items:center;

    :hover{
    
      background: rgb(105, 105, 105);
}
    
  `;
  const Submit = styled.button`
   height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius:10px;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
    :hover{
    
        background: rgb(88, 56, 250)
    }
  `;
  const File = styled.label`
   height: 55px;
    width: 100%;
    padding:10px 55px;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    border-radius:10px;
    transition: all 0.2s ease;
    background: rgb(158, 196, 165);
    :hover{
    
        background: rgb(175, 172, 190)
    }
  `;


   
  return (
    <Card>
     {/* <section className="container">
      <header>New Album</header>
      <form className="form">
        <div  className="input-box">
          <input type="text" placeholder="Title" required autoFocus/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Artist" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Album"  />
        </div>
        <div className="input-box">
          <input type="text"  placeholder="Genres"  />
        </div>
        <div className="column">
          <div className="input-box">
            <File>Album Image</File>
            <input type="file"  hidden />
          </div>
          <div className="input-box">
            <File>Album File</File>
            <input type="file" multiple required hidden />
          </div>
        </div>
        <div className="column">
          <div className="input-box">
          <Submit>Submit</Submit>
          </div>
          <div className="input-box">
           <Cancel >Cancel</Cancel>
          </div>
        </div>
      </form>
    </section> */}
    </Card>
  )
}

export default AddNewAlbum
