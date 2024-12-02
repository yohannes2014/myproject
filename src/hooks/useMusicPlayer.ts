import { useRef, useState } from "react";
import { imageUrl, audioUrl } from '../api/musicApi';
import { RootState } from "../types/musicTypes";
import { useDispatch, useSelector } from "react-redux";

export const useMusicPlayer = () => {

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const musicUrl = useSelector((state: RootState) => state.musicPlayer.musics[0]);
  const setPlayer = useSelector((state: RootState) => state.musicPlayer.setPlayer);

  const dispatch = useDispatch();
  // Refs for audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const myMusic = `${audioUrl}/${musicUrl.audio}`;
  const myImage = `${imageUrl}/${musicUrl.image}`;


  return {
    currentTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    isMuted,
    setIsMuted,
    duration,
    setDuration,
    musicUrl,
    setPlayer,
    audioRef,
    myMusic,
    myImage,
    dispatch
  };
}

