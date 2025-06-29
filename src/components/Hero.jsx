import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import carGif from "../assets/images/car.gif"; // ✅ Ensure correct path
import { GiRaceCar } from "react-icons/gi";
import { SiMediafire } from "react-icons/si";

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      const offset = window.scrollY * 0.2;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white" id="home">
      {/* 🚗 Background Car GIF with Parallax */}
      <img
        ref={bgRef}
        src={carGif}
        alt="Animated Car Background"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
      />

      {/* 🌓 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🌟 Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1
          className="text-4xl md:text-6xl sm:text-3xl  font-bold mb-4 text-white"
          style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.7)" }}
          data-aos="fade-down"
        >
          <SiMediafire className="inline-block" size={80} /> SpeedRush: Drive Beyond Limits
        </h1>

        <p
          className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ fontFamily: "bebas-neue, sans-serif", fontWeight: "300" }}
        >
          Experience the thrill of hyper-speed racing with next-gen visuals and real-time action.
        </p>

        <button
          className="relative px-2 py-1 rounded-full text-white text-lg sm:text-base sm:px-1 sm:py-0 font-bold
            bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-indigo-600 hover:to-cyan-500
            transition-all duration-300 ease-in-out
            shadow-xl hover:shadow-cyan-400/40 ring-2 ring-cyan-500 hover:ring-indigo-600 uppercase "
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <GiRaceCar className="inline-block mr-2" size={50} sm:size={20} /> Start Racing
        </button>
      </div>
    </section>
  );
};

export default Hero;
