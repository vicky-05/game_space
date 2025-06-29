import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRocket, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/game-1.png"; // 🔁 Update to your correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="fixed top-0 left-0 max-w-9xl w-full z-50 bg-black/60 backdrop-blur-md shadow-md text-white mx-auto"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-32">
          <a href="#home">
            <img
              src={Logo}
              alt="GameVerse Logo"
              className="w-full h-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm uppercase font-medium tracking-wider">
          <li>
            <a href="#home" className="hover:text-indigo-300 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#genres" className="hover:text-indigo-300 transition duration-200">
              Genres
            </a>
          </li>
          <li>
            <a href="#top-games" className="hover:text-indigo-300 transition duration-200">
              Top Games
            </a>
          </li>
          <li>
            <a href="#community" className="hover:text-indigo-300 transition duration-200">
              Community
            </a>
          </li>
          <li>
            <a href="#download" className="hover:text-indigo-300 transition duration-200">
              Download
            </a>
          </li>
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="#start"
          className="hidden md:inline-block bg-indigo-500 hover:bg-indigo-400 text-white text-sm px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 uppercase"
        >
          <FaRocket className="inline-block mr-2" size={20} /> Start Playing
        </a>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm uppercase font-medium tracking-wider">
            <li>
              <a onClick={toggleMenu} href="#home" className="hover:text-indigo-300 block">
                Home
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#genres" className="hover:text-indigo-300 block">
                Genres
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#top-games" className="hover:text-indigo-300 block">
                Top Games
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#community" className="hover:text-indigo-300 block">
                Community
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#download" className="hover:text-indigo-300 block">
                Download
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#start"
                className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm sm:ml-0 px-4 py-2 rounded-full font-semibold transition w-fit"
              >
                <FaRocket className="inline-block mr-2 " size={18} />
                Start Playing
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
