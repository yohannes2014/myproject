


export interface Musics {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genres: string;
  image: string;
  audio: string;
  totalItem:number;
  duration: string;
}

export interface newMusic {

  title: string;
  artist: string;
  album: string;
  genres: string;
  image: string;
  audio: string;
}

export interface Album {
  _id: string;
  artist: string;
  album: string;
  coverImageUrl: string;
  songs: Musics[];
}

export interface Artist {
  _id: string;
  artist: string;
  coverImageUrl: string;
  songs: Musics[];
}

export interface Genres {
  _id: string;
  genres: string;
  artist: string;
  coverImageUrl: string;
  songs: Musics[];
}



export interface RootState {
  musics: {
    albums: Album[];
    artist: Artist[];
    genres: Genres[];
    musics:Musics[];
    newMusic:newMusic[];
    currentMusic: Musics | null;
    removeMusic: boolean;
 
  },
   musicPlayer: {
    musics:Musics[],
    isPlaying:boolean,
    musicPlayer:boolean,
  
  
  }

 
}


export interface MusicsState {
  albums: Album[];
  artist: Artist[];
  genres: Genres[];
  musics:Musics[];
  loading: boolean;
  error: string | null;
  total:number;
  currentMusic:any;
  totalItem:number;
  removeMusic:boolean;
  musicAdded: boolean;
  musicUpdate: boolean;
}

export interface Music {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genres: string;
  image: string | null;
  audio: string | null;
  duration: string;
}

export interface musicPlayer {
    musics:[
      {
        _id: string,
      title: string,
      artist: string,
      album: string,
      genres: string,
      image: string,
      audio: string,
      totalItem:number,
      duration: string
    }
    ],
    setPlay: boolean,
    setPlayer: boolean,
  }



export interface Location {
  routeName: string,
  pathName: string,
}


