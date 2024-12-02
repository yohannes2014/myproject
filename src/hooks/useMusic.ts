import { useState } from "react";
import { RootState, Musics } from "../types/musicTypes";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../api/musicApi";

export const useMusic = () => {
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [genres, setGenres] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [duration, setDuration] = useState('0 : 00');
  const [musicTime, setMusicTime] = useState(0);
  const dispatch = useDispatch();
  const newMusic = useSelector((state: RootState) => state.musics.musicAdded)

  return { title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, audio, setAudio, duration, setDuration, musicTime, setMusicTime, dispatch, newMusic };
};

export const useCard = () => {
  const [removeMusic, setRemoveMusic] = useState<boolean>(false);

  return { removeMusic, setRemoveMusic };

};

export const useGenres = () => {
  const genres = useSelector((state: RootState) => state.musics.genres);
  const myMusic = useSelector((state: RootState) => state.musics.musics);
  const [selectGenres, setSelectGenres] = useState<string[]>([]);
  const [filteredMusic, setFilteredMusic] = useState<Musics[]>(myMusic);
  const dispatch = useDispatch();
  let total = genres.length;

  return { genres, myMusic, selectGenres, setSelectGenres, filteredMusic, setFilteredMusic, dispatch, total }

}

export const useHeader = () => {
  const totalMusic = useSelector((state: RootState) => state.musics.total);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  return { totalMusic, isOpen, setIsOpen, navigate }

}


export const useMusicCard = () => {

  const musics = useSelector((state: RootState) => state.musics.musics);
  const warning = useSelector((state: RootState) => state.musics.removeMusic);
  const loading = useSelector((state: RootState) => state.musics.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = musics.length;


  return { musics, warning, loading, navigate, total, dispatch }
}


export const useSubheader = () => {

  const routeName = useSelector((state: RootState) => state.location.routeName)
  const totalMusicItem = useSelector((state: any) => state.musics.totalItem);
  const location = useLocation();
  const dispatch = useDispatch();

  return { routeName, totalMusicItem, location, dispatch }

}

export const useUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<string>();
  const music = useSelector((state: RootState) => state.musics.musics.find((music: Musics) => music._id === id));
  const updated = useSelector((state: any) => state.musics.musicUpdate);
  const [title, setTitle] = useState(music?.title);
  const [artist, setArtist] = useState(music?.artist);
  const [album, setAlbum] = useState(music?.album);
  const [genres, setGenres] = useState(music?.genres);
  const [image, setImage] = useState<File | string | null>(null);
  const [imagePreview, setImagePreview] = useState(`${imageUrl}/${music?.image}`);


  return {
    navigate,
    dispatch,
    id,
    music,
    updated,
    title,
    setTitle,
    artist,
    setArtist,
    album,
    setAlbum,
    genres,
    setGenres,
    image,
    setImage,
    imagePreview,
    setImagePreview
  }
}

export const useAlbum = () => {
  const { album } = useParams<{ album: string }>();

  const dispatch = useDispatch()
  const albumMusics = useSelector((state: RootState) => state.musics.albums.find(music => music._id === album));
  const albums = useSelector((state: RootState) => state.musics.albums);
  const navigate = useNavigate();

  let total = albums.length


  return { album, dispatch, albumMusics, albums, navigate, total }
}

export const useArtist = () => {

  const artists = useSelector((state: RootState) => state.musics.artist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleArtist = (e: string) => {

    navigate(`/Artist/${e}`);

  }
  let total = artists.length;


  const { artist } = useParams<{ artist: string }>();

  const artistMusics = useSelector((state: RootState) => state.musics.artist.find(music => music._id === artist));

  return { artists, dispatch, handleArtist, total, artist, artistMusics };
}

export const useNotification = () => {
  const music = useSelector((state: RootState) => state.musics.currentMusic);
  const dispatch = useDispatch();

  return { music, dispatch };
}
