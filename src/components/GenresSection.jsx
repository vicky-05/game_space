import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoGameController } from "react-icons/io5";
import racingImg from "../assets/images/racing-car.gif";
import fpsImg from "../assets/images/gun-shoot.gif";
import rpgImg from "../assets/images/RPG.gif";
import brImg from "../assets/images/battle.gif";
import advImg from "../assets/images/adventure.gif";
import horrorImg from "../assets/images/horror.gif";
import { FaFire } from "react-icons/fa";
import {
    FaCarAlt,
    FaCrosshairs,
    FaDragon,
    FaSkullCrossbones,
    FaMapMarkedAlt,
    FaGhost,
} from "react-icons/fa";

const genres = [
    {
        name: "Racing",
        icon: <FaCarAlt className="text-4xl text-indigo-400 mb-4" />,
        description: "High-speed action on dynamic tracks.",
        backText: "🔥 Burn the Track!",
        bg: racingImg,
    },
    {
        name: "FPS",
        icon: <FaCrosshairs className="text-4xl text-indigo-400 mb-4" />,
        description: "Fast-paced shooter challenges await.",
        backText: "💥 Ready, Aim, Fire!",
        bg: fpsImg,
    },
    {
        name: "RPG",
        icon: <FaDragon className="text-4xl text-indigo-400 mb-4" />,
        description: "Enter magical realms of quests.",
        backText: "🧝‍♂️ Begin Your Journey",
        bg: rpgImg,
    },
    {
        name: "Battle Royale",
        icon: <FaSkullCrossbones className="text-4xl text-indigo-400 mb-4" />,
        description: "Only the strongest survive.",
        backText: "🏆 Be the Last One Standing",
        bg: brImg,
    },
    {
        name: "Adventure",
        icon: <FaMapMarkedAlt className="text-4xl text-indigo-400 mb-4" />,
        description: "Discover the unknown.",
        backText: "🚀 Explore Now!",
        bg: advImg,
    },
    {
        name: "Horror",
        icon: <FaGhost className="text-4xl text-indigo-400 mb-4" />,
        description: "Face your darkest fears.",
        backText: "😱 Survive the Night",
        bg: horrorImg,
    },
];



const GenresSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Initialize AOS on mount
    }, []);

    const [flipped, setFlipped] = useState(Array(genres.length).fill(false));

    const handleCardClick = (index) => {
        const updated = [...flipped];
        updated[index] = !updated[index];
        setFlipped(updated);
    };

    return (
        <section id="genres" className="bg-[#0d0d0d] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12"
                    data-aos="fade-up"
                >
                    <FaFire className="inline-block mr-2" /> Top Game Genres
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {genres.map((genre, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-[250px] flip-card ${flipped[index] ? "flipped" : ""
                                }`}
                            data-aos="flip-left"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="flip-card-inner w-full h-full">
                                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
                                    {genre.icon}
                                    <h3 className="text-xl font-semibold uppercase mb-2">{genre.name}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base font-mono">{genre.description}</p>
                                </div>

                                <div
                                    className="flip-card-back text-white rounded-xl p-6 flex flex-col justify-center items-center bg-cover bg-center"
                                    style={{ backgroundImage: `url(${genre.bg})` }}
                                >
                                    <div className="bg-black/60 p-4 rounded-lg">
                                        <p className="text-xl font-bold mb-4">{genre.backText}</p>
                                        <button className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-200 transition">
                                            <IoGameController className="inline-block mr-2" size={20} /> Play Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
};

export default GenresSection;
