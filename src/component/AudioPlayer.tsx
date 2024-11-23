import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePlayer } from '../features/musicPlayerSlice';
import { AiFillCloseSquare, FaCirclePause, VscUnmute, FaPlayCircle, IoVolumeMuteOutline } from '../icons';
import { imageUrl, audioUrl } from '../api/musicApi';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import {  RootState } from "../types/musicTypes";



const AudioPlayer: React.FC = () => {
  // Destructure the values from the custom hook
  const {
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
    isPlaying,
    setIsPlaying,             
  } = useMusicPlayer();



   const musicUrl = useSelector((state: RootState) => state.musicPlayer.musics[0]);





  const dispatch = useDispatch();


/* const music = useSelector((state:RootState)=> state.musicPlayer.musics)
const setClose = useSelector((state:RootState)=> state.musicPlayer.musicPlayer)
const setPlay = useSelector((state:RootState)=> state.musicPlayer.isPlaying) */


  // Refs for audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const myMusic = `${audioUrl}/${musicUrl.audio}`;
  const myImage = `${imageUrl}/${musicUrl.image}`;  

  


  // Play and pause music
  const playMusic = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    isPlaying ? pauseMusic() : playMusic();
  };

  // Toggle mute state
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume; 
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0; 
    }
  };

  // Handle seeking through the audio
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
    setCurrentTime(seekTime);
  };

  // Handle volume changes
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const adjustVolume = parseFloat(e.target.value);
    const clampedVolume = Math.min(Math.max(adjustVolume, 0), 1);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
    setVolume(clampedVolume);
  };

  useEffect(() => {
    const audioElement = audioRef.current; // Capture the current ref value

    const handleTimeUpdate = () => {
      if (audioElement) setCurrentTime(audioElement.currentTime);
    };

    const handleLoaded = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
        audioElement.volume = volume; // Set initial volume
      }
    };

    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('loadeddata', handleLoaded);
    }

    // Cleanup function using the captured variable
    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('loadeddata', handleLoaded);
      }
    };
  }, [volume, setCurrentTime, setDuration]);

  // Format the time duration
  const formatDuration = (durationSeconds: number) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0'); // second digit
    return `${minutes} : ${formattedSeconds}`;
  };

  // Close the music player
  const closeBtn = () => {
    dispatch(closePlayer());
  };

 
  return (
    <div className={`playerContainer`}>
      <audio ref={audioRef} src={myMusic} autoPlay />
      <div className='musicDiscri'>
        <div className='musicImage'>
          <img src={myImage} alt='cover' className='audioCover' />
        </div>
        <div>
          <p>Title: <b>{musicUrl.title}</b></p>
          <p>Artist: <b>{musicUrl.artist}</b></p>
        </div>
      </div>
      <div className='musicPlay'>
        <div>
          <span onClick={handlePlayPause}>
            {isPlaying ? <FaCirclePause className='playPause' /> : <FaPlayCircle className='playPause' />}
          </span>
        </div>
        <div className='playControl'>
          <input
            className='playRange'
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            step="0.01"
            onChange={handleSeek}
          />
        </div>
        <div className='duration'>
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
      </div>
      <div className='musicControl'>
        <AiFillCloseSquare className='close' onClick={closeBtn} />
        <span onClick={toggleMute}>
          {isMuted ? <IoVolumeMuteOutline className='muteBtn' /> : <VscUnmute className='muteBtn' />}
        </span>
        <input
          type='range'
          onChange={handleVolume}
          min="0"
          max="1"
          value={volume}
          step="0.01"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

















