import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { GrGallery } from "react-icons/gr";
import img1 from "../assets/gallery/img-1.webp";
import img2 from "../assets/gallery/img-2.jpg";
import img3 from "../assets/gallery/img-3.jpg";
import img4 from "../assets/gallery/img-4.jpg";
import img5 from "../assets/gallery/img-5.jpg";
import img6 from "../assets/gallery/img-6.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400" data-aos="fade-up">
          <GrGallery className="inline-block mr-2" />
          Game Gallery
        </h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((img, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            glarePosition="all"
            transitionSpeed={800}
            className="rounded-xl"
          >
            <div
              className="relative group overflow-hidden rounded-xl shadow-lg border border-indigo-700"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">View</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
