import { useMusicPlayer } from '../hooks/useMusicPlayer';


export const handleTimeUpdate = (audioElement: HTMLAudioElement | null): void => {
  const { setCurrentTime } = useMusicPlayer();

 
  if (audioElement) {
    setCurrentTime(audioElement.currentTime);
  }
};

