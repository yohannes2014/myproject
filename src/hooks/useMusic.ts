import { useState } from "react";


export const useNewMusic = () =>{
const [title, setTitle] = useState<string>('');
const [artist, setArtist] = useState<string>('');
const [album, setAlbum] = useState<string>('');
const [genres, setGenres] = useState<string>('');
const [image, setImage] = useState<string>('');
const [audio, setAudio] = useState<string>('');

return {title, setTitle, artist, setArtist, album, setAlbum, genres, setGenres, image, setImage, audio, setAudio}

}


