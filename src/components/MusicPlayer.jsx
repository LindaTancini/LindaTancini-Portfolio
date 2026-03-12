import { useRef, useState } from "react";
import music from "../assets/music-lofi.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      audioRef.current.volume = 0.2;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? (
          <div className="equalizer">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          "🎧"
        )}
      </button>
    </>
  );
}

export default MusicPlayer;
