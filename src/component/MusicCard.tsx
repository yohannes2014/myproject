import { RiDeleteBin6Line, FaRegEdit, FaPlayCircle } from '../icons/index';
import { findMuiscById, setRemoveCard, totalMUsicItem } from "../features/musicsSlice";
import { setMusicPlay } from "../features/musicPlayerSlice";
import { Card, Mycard, Discription, Music, MyBtns, Edit, Delete, Overlay, PlayCard } from "../styled/MusicCard.styles";
import { useEffect } from "react";
import { imageUrl } from "../api/musicApi";
import { Warnning } from "./Notification";
import { Musics } from "../types/musicTypes"
import Loading from "./Loading";
import { useMusicCard } from "../hooks/useMusic";

const MusicCard: React.FC = () => { 
  
  const { musics, loading, warning, navigate, total, dispatch } = useMusicCard();

  useEffect(() => {
    dispatch(totalMUsicItem(total));
  }, [dispatch, total]);

  const handleDelete = (id: string) => {
    dispatch(findMuiscById(id));
    dispatch(setRemoveCard());
  };

  const handlePlay = (music: Musics) => {
    dispatch(setMusicPlay({
      musics: [music],
      setPlay: true,
      setPlayer: true,
    }));
  };

  const editHandler = (music: Musics) => {
    navigate(`/Update/${music._id}`);
  };

  return (
    <>
      {warning && <Warnning />}
      {loading && <Loading />}

      {musics.map((music) => (
        <Card key={music._id} >
          <Overlay>
            <PlayCard onClick={() => handlePlay(music)}  >
              <FaPlayCircle className='CardBtn' />
            </PlayCard>
            <MyBtns>
              <Edit onClick={() => editHandler(music)} ><FaRegEdit /></Edit>
              <Delete onClick={() => handleDelete(music._id)}><RiDeleteBin6Line /></Delete>
            </MyBtns>
          </Overlay>
          <Mycard>
            <img src={`${imageUrl}/${music.image}`} className='coverImage' alt={music.title} />
          </Mycard>
          <Discription>
            <Music>Artist: <b>{music.artist}</b></Music>
            <Music>Title: <b>{music.title}</b></Music>
          </Discription>
        </Card>
      ))}
    </>
  );
};

export default MusicCard;