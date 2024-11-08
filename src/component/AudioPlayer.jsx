import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePlayer } from '../features/musicPlayerSlice';
import { AiFillCloseSquare, FaCirclePause, VscUnmute, FaPlayCircle, IoVolumeMuteOutline } from '../icons/';
import { imageUrl, audioUrl } from '../api/musicApi';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();
  const music = useSelector((state) => state.musicPlayer.musics);
  const musicPlayer = useSelector((state) => state.musicPlayer.musicPlayer);

  const audioRef = useRef();
  const myMusic = `${audioUrl}/${music.audio}`;
  const myImage = `${imageUrl}/${music.image}`;

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    isPlaying ? pauseMusic() : playMusic();
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      audioRef.current.volume = volume; // Restore previous volume
    } else {
      setIsMuted(true);
      audioRef.current.volume = 0; // Mute
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolume = (e) => {
    const adjustVolume = parseFloat(e.target.value);
    const clampedVolume = Math.min(Math.max(adjustVolume, 0), 1);
    audioRef.current.volume = clampedVolume;
    setVolume(clampedVolume);
  };

  useEffect(() => {
    const audioElement = audioRef.current; // Capture the current ref value

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleLoaded = () => {
      setDuration(audioElement.duration);
      audioElement.volume = volume; // Set initial volume
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
  }, [volume]);

  const formatDuration = (durationSeconds) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");  //second digit
    return `${minutes} : ${formattedSeconds}`;
  };

  const closeBtn = () => {
    dispatch(closePlayer());
  };

  return (
    <div className={`playerContainer ${musicPlayer ? 'hiddenPlayer' : ''}`}>
      <audio ref={audioRef} src={myMusic} autoPlay />
      <div className='musicDiscri'>
        <div className='musicImage'>
          <img src={myImage} alt='cover' className='audioCover' />
        </div>
        <div>
          <p>Title: <b>{music.title}</b></p>
          <p>Artist: <b>{music.artist}</b></p>
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
