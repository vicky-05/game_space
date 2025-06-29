import { useEffect, useState, useRef } from "react";
import { MdDownloadForOffline } from "react-icons/md";
import ResidentEvilRequiem from "../assets/trailers/trailer-1.mp4";
import Pragmata from "../assets/trailers/trailer-2.mp4";
import DeathStranding2 from "../assets/trailers/trailer-3.mp4";
import GTA6 from "../assets/trailers/trailer-4.mp4";
import { FaForward } from "react-icons/fa6";

const trailers = [
  {
    title: "Resident Evil 4",
    video: ResidentEvilRequiem,
  },
  {
    title: "Pragmata",
    video: Pragmata,
  }
  ,
  {
    title: "Death Stranding 2",
    video: DeathStranding2,
  },
  {
    title: "GTA 6",
    video: GTA6,
  },
  
]

const TrailerSection = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trailers.length);
    }, 20000); // 20s per video
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden group">
      {/* 🎥 Fullscreen Video */}
      <video
        ref={videoRef}
        key={trailers[current].title}
        src={trailers[current].video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 🌑 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 📥 Hover Text at Bottom */}
      <div
        className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4 font-mono">
          {trailers[current].title}
        </h2>
        <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-black font-semibold text-lg font-mono rounded-full flex items-center gap-2 shadow-md transition">
          <FaForward className="" /> Coming Soon
        </button>
      </div>
    </section>
  );
};

export default TrailerSection;
