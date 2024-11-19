

export interface Music {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  image: string;
  audio: string;
  duration: string;
}


export interface Album {
  _id: string;
  artist: string;
  album: string;
  coverImageUrl: string;
  songs: Music[];
}

export interface Artist {
  _id: string;
  name: string;
  artist: string;
  coverImageUrl: string;
  songs: Music[];
}



export interface RootState {
  musics: {
    albums: Album[];
    artist: Artist[];
  
  };
}


