import { useEffect, useState } from "react";
import yourIcon from "../assets/images/space-man.png"; // Replace with your icon image

const FloatingImage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // Show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full
                   shadow-lg transition-transform transform hover:scale-110
                   hover:shadow-indigo-400/40 bg-black/30 backdrop-blur-sm p-1"
      >
        <img
          src={yourIcon}
          alt="Floating Icon"
          className="w-full h-full object-contain"
        />
      </a>
    )
  );
};

export default FloatingImage;
