
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line, FaRegEdit, FaPlayCircle } from '../icons/index'; 
import { findMuiscById, setRemoveCard, totalMUsicItem} from "../features/musicsSlice";
import { setMusicPlay } from "../features/musicPlayerSlice";
import { Card, Mycard, Discription, Music, MyBtns, Edit, Delete, Overlay, PlayCard} from "./styled/MusicCard.styles";
import { useEffect } from "react";
import { imageUrl } from "../api/musicApi";
import {  Warnning } from "./Notification";



const MusicCard = () => {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.musics); 
  let totalItem = useSelector((state)=>state.musics.totalItem);
  const warning = useSelector((state)=>state.musics.removeMusic)
 const navigate = useNavigate()
 
 let total = musics.length;
 totalItem = musics.length;

 
 useEffect(()=>{
   dispatch(totalMUsicItem(total));
 },[dispatch, total])
 


  const handleDelete = (e) =>{

    dispatch(findMuiscById(e)) 
    dispatch(setRemoveCard());

}


totalMUsicItem(totalItem)



  const handlePlay = (e) => {
    dispatch(setMusicPlay(e));

  }

  const editHandler = (e) => {

navigate(`/Update/${e._id}`)
 
  }

  return (
    <>
{warning && <Warnning />}

      
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
              <img src={`${imageUrl}/${music.image}`} className='coverImage'  alt="" />
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

