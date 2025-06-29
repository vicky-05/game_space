import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/images/game-1.png";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <footer className="bg-[#0D0D0D] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">

        {/* About / Logo */}
        <div data-aos="fade-up">
          <div className="w-32">
            <a href="#home">
              <img
                src={Logo}
                alt="GameVerse Logo"
                className="w-full h-auto object-contain mb-3"
              />
            </a>
          </div>
          <p className="text-base leading-relaxed text-gray-400 font-mono" >
            Dive into the ultimate gaming multiverse. Connect, compete, and conquer with players worldwide.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 text-base" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-indigo-300 text-lg font-semibold mb-2 " style={{fontFamily: 'bebas-neue, sans-serif'}}>Quick Links</h4>
          <ul className="space-y-2 font-mono">
            <li><a href="#genres" className="hover:text-white transition">Genres</a></li>
            <li><a href="#topgames" className="hover:text-white transition">Top Games</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#trailers" className="hover:text-white transition">Trailers</a></li>
            <li><a href="#download" className="hover:text-white transition">Download</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right" data-aos="fade-up" data-aos-delay="400">
          <h4 className="text-indigo-300 text-lg font-semibold mb-2" style={{fontFamily: 'bebas-neue, sans-serif'}}>Connect with Us</h4>
          <div className="flex md:justify-end justify-center space-x-4 text-xl">
            <a href="#" className="hover:text-indigo-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-400 transition"><FaDiscord /></a>
            <a href="#" className="hover:text-indigo-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-400 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 flex justify-between items-center flex-wrap">
        <p>© {new Date().getFullYear()} GameVerse. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
