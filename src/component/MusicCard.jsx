
import { useDispatch, useSelector } from "react-redux";

import Loading from "./styled/Loading";
import Page404 from "../Page/Page404";
import './styled/card.css'
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line, FaRegEdit, FaPlayCircle } from '../icons/index'; 
import { deleteMusicRequest, fetchTotalRequest, totalMUsicItem } from "../features/musicsSlice";
import { setMusicPlay } from "../features/musicPlayerSlice";
import { useEffect} from "react";
import { Card, Mycard, Discription, Music, MyBtns, Edit, Delete, Overlay, PlayCard} from "./styled/MusicCard.styles";



const MusicCard = () => {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.musics);   
  const loading = useSelector((state) => state.musics.loading);
  const error = useSelector((state) => state.musics.error);
  const totalMusic = useSelector((state)=>state.musics.total);

useEffect(()=>{

  dispatch(totalMUsicItem(totalMusic))
},[dispatch, totalMusic])

 const navigate = useNavigate()
 
  
  const handleDelete =(e) =>{
  
    dispatch(deleteMusicRequest(e))
    dispatch(fetchTotalRequest())
 
}

  const handlePlay = (e) => {
    dispatch(setMusicPlay(e));

  }

  const editHandler = (e) => {

navigate(`/Update/${e._id}`)
 
  }

  return (
    <>
      {loading && <Loading />}
      {error && <Page404 />}
      
     { musics.map((music, id) => (
          <Card key={id}>
          <Overlay>
          <PlayCard onClick={()=>handlePlay(music)}> <FaPlayCircle className='CardBtn' /></PlayCard>
          <MyBtns>
                <Edit onClick={e => editHandler(music)} to={``}><FaRegEdit /></Edit>
                <Delete onClick={() => handleDelete(music._id)}><RiDeleteBin6Line /></Delete>
            </MyBtns>
          </Overlay>
            <Mycard >
              <img src={`http://localhost:5000/images/${music.image}`} className='coverImage'  alt="" />
            </Mycard>
            <Discription>
                    <Music>Artist: <b>{music.artist}</b></Music>
                    <Music>Title: <b>{music.title}</b></Music>
            </Discription>
           
           
          </Card>
        ))}

    </>
  )
}

export default MusicCard

