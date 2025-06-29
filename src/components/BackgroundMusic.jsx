import { useRef, useState } from "react";
import bgMusic from "../assets/images/bgm.mp3";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!started) {
      // First-time user interaction
      audio.volume = 0.4;
      audio.loop = true;
      audio.muted = false;
      audio.play().catch((err) => console.warn("Play failed:", err));
      setStarted(true);
      setMuted(false);
    } else {
      // Toggle mute
      audio.muted = !audio.muted;
      setMuted(audio.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} />

      <button
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-90 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 shadow-md"
      >
        {muted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
