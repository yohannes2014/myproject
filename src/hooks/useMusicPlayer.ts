import { useState } from "react";

export const useMusicPlayer = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [volume, setVolume] = useState<number>(0.5);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);


  return { currentTime, setCurrentTime, isPlaying, setIsPlaying, volume, setVolume, isMuted, setIsMuted, duration, setDuration}
}

