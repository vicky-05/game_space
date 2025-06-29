import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hogwartsImg from "../assets/images/hogwarts..webp";
import eldenRingImg from "../assets/images/layer-of-fear.jpg";

gsap.registerPlugin(ScrollTrigger);

const games = [
    {
        title: "Hogwarts Legacy",
        desc: "Step into the magical world of wizards and spells. Explore Hogwarts in an all-new open-world RPG experience.",
        image: hogwartsImg,
        direction: "left",
    },
    {
        title: "Layer Of Fear 2",
        desc: "A painter descending into madness. Visual hallucinations and looping rooms. Experience a psychological horror like never before.",
        image: eldenRingImg,
        direction: "right",
    },
];

const StackedGameImages = () => {
    const refs = useRef([]);

    useEffect(() => {
        refs.current.forEach((ref, i) => {
            if (!ref) return;

            // Animate text
            gsap.fromTo(
                ref.querySelector(".text-block"),
                { opacity: 0, x: games[i].direction === "right" ? -60 : 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 80%",
                        end: "bottom 30%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Animate image
            gsap.fromTo(
                ref.querySelector(".image-block"),
                { opacity: 0, y: 60, scale: 1.05 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Fade-out effect (optional but smooth!)
            gsap.to(ref, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ref,
                    start: "top top+=200",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <section className="bg-black text-white py-32 px-6 ">
            <div className="max-w-7xl mx-auto space-y-40">
                {games.map((game, index) => (
                    <div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className={`flex flex-col lg:flex-row items-center justify-between sm:flex-row gap-12 ${game.direction === "left" ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text */}
                        <div className="text-block lg:w-1/2 w-full space-y-4 text-center lg:text-left">
                            <h2 className="text-7xl font-bold text-indigo-400 sm:text-4xl lg:text-7xl" style={{fontFamily: "Bebas Neue"}}>{game.title}</h2>
                            <p className="text-gray-300 text-4xl sm:text-2xl" style={{fontFamily: "Oswald"}}>{game.desc}</p>
                        </div>

                        {/* Image */}
                        <div className="image-block lg:w-1/2 w-full group">
                            <img
                                src={game.image}
                                alt={game.title}
                                className="rounded-xl border-4 border-indigo-700 shadow-xl w-full h-[420px] object-cover 
                           group-hover:scale-105 group-hover:ring-4 group-hover:ring-indigo-400 transition-all duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StackedGameImages;
