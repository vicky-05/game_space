import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cityImage from "../assets/images/gta-vice.webp"; // Replace with your image


gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Animate image when it first enters view
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Animate text later on scroll
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section className="w-full min-h-[200vh] flex flex-col md:flex-row bg-black text-white relative sm:flex-row">
            {/* Left Side: Text appears on scroll */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6">
                <div ref={textRef} className="max-w-md opacity-0">

                    <p className="text-lg sm:text-base sm:font-semibold font-bold text-gray-300 uppercase text-center" style={{ fontFamily: "Oswald, sans-serif", fontSize: "2.5rem" }}>
                        "Step into a neon-soaked world of crime, power, and unforgettable
                        moments. Rule the streets and rise through the ranks"
                    </p>
                </div>
            </div>

            {/* Right Side: Sticky + animated image */}
            <div className="w-full md:w-1/2 h-screen sticky top-0 border-3 border-indigo-800" data-aos="fade-up" data-aos-duration="1000">
                <img
                    ref={imageRef}
                    src={cityImage}
                    alt="Vice City"
                    className="w-full h-full object-cover opacity-0"
                />
            </div>
        </section>
    );
};

export default Showcase;
