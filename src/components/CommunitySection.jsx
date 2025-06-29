import { FaDiscord, FaYoutube, FaTwitter, FaTwitch } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserFriends } from "react-icons/fa";
import communityBg from "../assets/images/Gaming-Community.jpg"; // use a cool game-community image
import avatar3 from "../assets/images/avatar-3.avif"; // use a cool avatar image
import avatar4 from "../assets/images/avatar-4.avif"; // use a cool avatar image

const CommunitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${communityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="community"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Floating Avatars (Optional UI effect) */}
      <div className="absolute top-10 left-10 animate-ping">
        <img src={avatar3} alt="user1" className="w-12 h-12 rounded-full border-2 border-indigo-600" />
      </div>
      <div className="absolute bottom-10 right-10 animate-ping">
        <img src={avatar4} alt="user2" className="w-12 h-12 rounded-full border-2 border-pink-400" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-2xl px-10 py-12 text-center max-w-3xl mx-auto shadow-lg border border-white/20">
        <h2
          className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4 " style={{fontFamily: 'bebas-neue, sans-serif'}}
          data-aos="zoom-in"
        >
          <FaUserFriends className="inline-block mr-2" /> Join Our Gaming Community
        </h2>
        <p
          className="text-gray-200 text-lg mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Team up, chat live, share gameplay, and be part of a global army of gamers.
          Let’s dominate the leaderboard together!
        </p>

        <div
          className="flex flex-wrap justify-center gap-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#"
            className="bg-[#5865F2] hover:bg-[#4e5bd4] px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition shadow-lg hover:shadow-indigo-600/50"
          >
            <FaDiscord /> Join Discord
          </a>
          <a
            href="#"
            className="bg-[#6441a5] hover:bg-[#543b9c] px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition shadow-lg hover:shadow-purple-600/40"
          >
            <FaTwitch /> Watch on Twitch
          </a>
          <a
            href="#"
            className="bg-[#FF0000] hover:bg-[#cc0000] px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition shadow-lg hover:shadow-red-600/50"
          >
            <FaYoutube /> YouTube Channel
          </a>
          <a
            href="#"
            className="bg-[#1DA1F2] hover:bg-[#0d8bdc] px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition shadow-lg hover:shadow-sky-400/40"
          >
            <FaTwitter /> Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
