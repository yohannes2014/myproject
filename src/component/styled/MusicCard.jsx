import {fetchMusicRequest,deleteMusicRequest} from "../../redux/actions/MusicActions"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Loading from "./Loading";
import Page404 from "../../Page/Page404";



const MusicCard = () => {
const dispatch = useDispatch();
const musics  = useSelector((state)=>state.musics.musics);
const loading = useSelector((state)=>state.musics.loading);
const error = useSelector((state)=>state.musics.error);


useEffect(()=>{
 dispatch(fetchMusicRequest())
},[dispatch]) 

    const Card = styled.div`
    width:300px;
    height: 160px;
    border-radius:20px;
    box-shadow:0px 0px 14px 0.01px rgba(31, 10, 134, 0.5);
    display:flex;
    justify-content:space-evenly;
    flex-direction:row-reverse;
    margin:10px;
    
    
    `;
    const Photo = styled.div`
    height:150px;
    width:150px;
    
    border-radius:10px;
    margin:5px;


    background-color:lightblue;

    `;
    const Disc = styled.div`
    height:150px;
    width:120px;
    margin:5px;
    border-radius:10px;
    padding-left:10px;
    align-items:center;
    
    background-color:yellow;

    `;
    const P = styled.p`
    font-size:10px;

    `;
    const Menus = styled.div`
    

    `;

  return (
    <>
     {loading && <Loading />}
     {error && <Page404 />}
  {
    musics.map((music)=>(
    <Card key={music._id}>   
        <Photo>
        {music.image}
  
        </Photo>
        <Disc>
          <Menus>
              <P><b>Title :</b>{music.title}</P>
            <P><b>Artist :</b>{music.artist}</P>
            <P><b>Album :</b> {music.album}</P>
            <P><b>Genres :</b> {music.genres}</P>
          </Menus>
        <div>
            <button>Edit</button>
            <button onClick={()=>dispatch(deleteMusicRequest(music.id))}>Delete</button>
        </div>
        
        </Disc>
    </Card>
))}
 
   </>
  )
}

export default MusicCard 