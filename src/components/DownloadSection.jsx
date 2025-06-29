import { FaWindows, FaPlaystation, FaXbox, FaSteam, FaGooglePlay } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import downloadBg from "../assets/images/all-in-one.webp"; // ✅ Replace with your image

const DownloadSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section
      className="relative w-full text-white overflow-hidden pt-72" 
      style={{
        backgroundImage: `url(${downloadBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
        data-aos="fade-up"
        id='download'
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-24 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold uppercase text-indigo-400 mb-4"
          data-aos="fade-up" style={{fontFamily: 'bebas-neue, sans-serif'}}
        >
          <MdDownload className="inline-block mr-2" /> Download & Start Playing Today
        </h2>
        <p
          className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Available across all major platforms. Dive into the action — no matter where you play.
        </p>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-6 text-3xl mb-10">
          <FaWindows
            className="text-blue-400 hover:scale-110 transition"
            data-aos="fade-right"
            title="Windows"
          />
          <FaPlaystation
            className="text-indigo-400 hover:scale-110 transition"
            data-aos="fade-down"
            data-aos-delay="100"
            title="PlayStation"
          />
          <FaXbox
            className="text-green-500 hover:scale-110 transition"
            data-aos="fade-up"
            data-aos-delay="200"
            title="Xbox"
          />
          <FaSteam
            className="text-gray-200 hover:scale-110 transition"
            data-aos="fade-left"
            data-aos-delay="300"
            title="Steam"
          />
          <FaGooglePlay
            className="text-green-400 hover:scale-110 transition "
            data-aos="fade-up-right"
            data-aos-delay="400"
            title="Google Play"
          />
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-lg"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <MdDownload className="text-2xl" /> Download Now
        </a>

        {/* System Requirements */}
        <p
          className="mt-8 text-sm text-gray-400"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          * Recommended: 8GB RAM, GTX 1060 or higher. Download size: ~25GB
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
