import { useState } from "react";



export const useMusic = () => {
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [genres, setGenres] = useState<string>('');
  const [image, setImage] = useState<File | null>(null); // File | null instead of string
  const [audio, setAudio] = useState<File | null>(null); // File | null instead of string

  return { title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, audio, setAudio };
};




export const useCard = () =>{
    const [removeMusic, setRemoveMusic ] = useState<boolean>(false);

    return {removeMusic, setRemoveMusic}

}





