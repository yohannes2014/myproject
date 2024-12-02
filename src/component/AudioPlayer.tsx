import React, { useEffect } from 'react';
import { closePlayer } from '../features/musicPlayerSlice';
import { AiFillCloseSquare, FaCirclePause, VscUnmute, FaPlayCircle, IoVolumeMuteOutline } from '../icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { PlayerContainer, MusicDiscri, MusicImage, AudioCover, MusicPlay, PlayControl, Duration, MusicControl, P, Name, VolumeRange } from '../styled/MusicPlayer';

const AudioPlayer: React.FC = () => {

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
    musicUrl,
    myImage,
    myMusic,
    audioRef,
    setPlayer,
    dispatch
  } = useMusicPlayer();


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
  }, [volume, setCurrentTime, setDuration, audioRef]);

  // Format the time duration
  const formatDuration = (durationSeconds: number) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0'); // second digit
    return `${minutes} : ${formattedSeconds}`;
  };


  const closeBtn = () => {
    dispatch(closePlayer());
  };

  return (
    <PlayerContainer hidden={setPlayer} >
      <audio ref={audioRef} src={myMusic} autoPlay />
      <MusicDiscri >
        <MusicImage>
          <AudioCover src={myImage} alt='cover' />
        </MusicImage>
        <div>
          <P>Title: <Name>{musicUrl.title}</Name></P>
          <P>Artist: <Name>{musicUrl.artist}</Name></P>
        </div>
      </MusicDiscri>
      <MusicPlay>
        <div>
          <span onClick={handlePlayPause}>
            {isPlaying ? <FaCirclePause className='playPause' /> : <FaPlayCircle className='playPause' />}
          </span>
        </div>
        <PlayControl>
          <input
            className='playRange'
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            step="0.01"
            onChange={handleSeek}
          />
        </PlayControl>
        <Duration>
          <P>{formatDuration(currentTime)}</P>
          <P>{formatDuration(duration)}</P>
        </Duration>
      </MusicPlay>
      <MusicControl>
        <AiFillCloseSquare className='close' onClick={closeBtn} />
        <span onClick={toggleMute}>
          {isMuted ? <IoVolumeMuteOutline className='muteBtn' /> : <VscUnmute className='muteBtn' />}
        </span>

        <VolumeRange
          type='range'
          onChange={handleVolume}
          min="0"
          max="1"
          value={volume}
          step="0.01"
        />
      </MusicControl>
    </PlayerContainer>
  );
};

export default AudioPlayer;

