import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMusicRequest, fetchTotalRequest, fetchAlbumsRequest, fetchGenresRequest, fetchArtistsRequest  } from "../features/musicsSlice";

const useFetch = () => {

const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(fetchMusicRequest())
    dispatch(fetchTotalRequest())
    dispatch(fetchAlbumsRequest())
    dispatch(fetchArtistsRequest())
    dispatch(fetchGenresRequest())
  },[dispatch]) 

}

export default useFetch; 
