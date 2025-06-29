import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { IoGameController } from "react-icons/io5";
import Modal from "./TrailerModal";
import { GiBurningEmbers } from "react-icons/gi";
import { BsCameraReelsFill } from "react-icons/bs";
import apexImg from "../assets/images/apex-legends.jpg";
import forzaImg from "../assets/images/forza.jpg";
import witcherImg from "../assets/images/witcher.avif";


const topGames = [
  {
    title: "Apex Legends",
    image: apexImg,
    trailer: "https://www.youtube.com/embed/UMJb_mkqynU",
  },
  {
    title: "Forza Horizon 5",
    image: forzaImg,
    trailer: "https://www.youtube.com/embed/FYH9n37B7Yw",
  },
  {
    title: "The Witcher 3",
    image: witcherImg,
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
  },
];

const TopGamesSection = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const openModal = (url) => {
    setTrailerUrl(url);
    setIsOpen(true);
  };

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 text-white relative z-10" id="top-games">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-indigo-400 mb-16"
          data-aos="fade-up"
        >
          <IoGameController className="inline-block mr-2" /> Top Games This Month
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {topGames.map((game, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#C084FC"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="rounded-xl"
            >
              <div
                className="relative group overflow-hidden rounded-xl shadow-lg 
                           hover:shadow-indigo-400/40 transition duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-2xl font-bold mb-2 text-indigo-500">
                    {game.title}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-full transition"
                    >
                      <GiBurningEmbers className="inline-block mr-2" size={20} /> Play Now
                    </button>
                    <button
                      onClick={() => openModal(game.trailer)}
                      className="px-4 py-2 border border-indigo-400 hover:bg-indigo-700 text-white font-semibold rounded-full transition"
                    >
                      <BsCameraReelsFill className="inline-block mr-2" size={20} /> Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {isOpen && <Modal trailerUrl={trailerUrl} onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default TopGamesSection;
