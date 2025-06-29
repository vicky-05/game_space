import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDownloadForOffline } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import cyberpunk from "../assets/images/cyperpunk.jpg";
import gta from "../assets/images/gta.webp";
import valorant from "../assets/images/Assassin's-Creed-Mirage.jpg";
import cod from "../assets/images/cod.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Cyberpunk 2077",
        desc: "Explore a dystopian future full of high-tech weaponry and thrilling missions.",
        image: cyberpunk,
        rating: 4,
    },
    {
        title: "GTA V",
        desc: "Immerse yourself in an open world with missions, heists, and endless freedom.",
        image: gta,
        rating: 5,
    },
    {
        title: "Assassin's Creed Mirage	",
        desc: "Return to stealth-focused gameplay in a beautiful Middle Eastern setting.",
        image: valorant,
        rating: 4,
    },
    {
        title: "Call of Duty",
        desc: "Experience the battlefield with high-octane FPS gameplay and cinematic action.",
        image: cod,
        rating: 5,
    },
];

const GameFeatures = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 800, once: false });

        const ctx = gsap.context(() => {
            features.forEach((_, index) => {
                ScrollTrigger.create({
                    trigger: `.feature-step-${index}`,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#0a0a0a] text-white py-12 px-6 hidden lg:block"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Side: Scrollable Text */}
                <div className="flex-1 space-y-[60vh]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-step-${index} h-screen flex flex-col justify-center`}
                        >
                            <h3
                                className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4"
                                data-aos="fade-right"
                                style={{fontFamily: "Oswald", fontSize: "2.3rem"}} 
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="text-gray-300 text-lg max-w-md mb-4"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                style={{fontFamily: "Bebas Neue", fontSize: "2rem", fontWeight: "bold"}}
                            >
                                {feature.desc}
                            </p>

                            {/* Ratings */}
                            <div className="flex items-center mb-6" data-aos="fade-up" data-aos-delay="200">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < feature.rating ? "text-yellow-400 text-xl" : "text-gray-600 text-xl"}>
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* Install Button */}
                            <button
                                className="px-2 w-40 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xl rounded-full transition"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <MdDownloadForOffline className="inline-block mr-2" style={{fontSize: "1.5rem"}}/> Install Now
                            </button>

                        </div>
                    ))}
                </div>

                {/* Right Side: Sticky GIF */}
                <div className="flex-1 hidden lg:block sticky top-28  h-[400px]">
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                    >
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-indigo-700">
                            <img
                                key={features[activeIndex].image} // 🔁 forces re-render & animation
                                ref={imageRef}
                                src={features[activeIndex].image}
                                alt={features[activeIndex].title}
                                className="w-full h-full object-cover rounded-xl 
                   opacity-0 scale-95 animate-fade-zoom 
                   transition-all duration-700 ease-out"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-indigo-500/10 rounded-xl animate-pulse pointer-events-none z-10" /> */}

                        </div>
                    </Tilt>
                </div>

            </div>
        </section>
    );
};

export default GameFeatures;
