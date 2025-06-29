import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsChatDotsFill } from "react-icons/bs";

import player1 from "../assets/images/avatar-1.jpg";
import player2 from "../assets/images/avatar-2.jpg";
import player3 from "../assets/images/avatar-2.avif";

const testimonials = [
  {
    name: "RogueShadow",
    message: "ShadowWar changed my game nights! The graphics and speed are unreal.",
    avatar: player1,
  },
  {
    name: "PixelSlinger",
    message: "Felt like I was in the city — the races, the chaos, the adrenaline!",
    avatar: player2,
  },
  {
    name: "MageByte",
    message: "The quests feel personal. It's more than just a game — it's a world.",
    avatar: player3,
  },
];

// 🔠 Typing Text Component
const TypingText = ({ text, trigger }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [trigger, text]);

  return <p className="text-sm leading-relaxed">{displayedText}</p>;
};

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-500" data-aos="fade-up">
          <BsChatDotsFill className="inline-block mr-2" /> Voices of the Arena
        </h2>
        <p className="text-gray-400 mt-2" data-aos="fade-up" data-aos-delay="100">
          Hear it from the legends themselves.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // re-run typing each time user scrolls to it
            threshold: 0.5,
          });

          return (
            <div
              key={i}
              ref={ref}
              className="relative bg-[#1a1a1a] p-6 rounded-xl shadow-lg 
                         hover:shadow-indigo-500/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Animated Avatar with loop pulse */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-indigo-600 absolute -top-10 left-6 
                           bg-black object-cover animate-bounce hover:animate-spin"
              />

              {/* Speech Bubble */}
              <div className="bg-gradient-to-br from-indigo-700 to-indigo-500 text-white p-5 rounded-lg mt-10 shadow-md relative">
                <TypingText text={t.message} trigger={inView} />
                <div className="absolute left-6 -bottom-3 w-5 h-5 rotate-45 bg-indigo-600"></div>
              </div>

              {/* Name */}
              <p className="mt-6 text-indigo-300 font-semibold text-left pl-1">{t.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
