import "./herosection.css";
import heroprofile from '../assets/hero-profile.png';
import heroimage1 from '../assets/heroimg1.svg';
import heroimage2 from '../assets/heroimg2.svg';
import heroimage3 from '../assets/heroimg3.svg';
import heroimage4 from '../assets/heroimg4.svg';
import heroimage5 from '../assets/heroimg5.svg';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const HeroSection = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        gsap.to(nameRef.current, {
            duration: 3.5,
            scrambleText: {
                text: "I'm Abdul Gani Ayman",
                chars: "lowerCase",
                revealDelay: 0.2,
                speed: 0.9,
            },
        });
    }, []);

    return (
        <section className="HeroSection">
            <div className="hero-left">
                <img className="hero-image" src={heroprofile} alt="" />
            </div>
            <div className="hero-right">
                <h2 className="hero-name" ref={nameRef}>&nbsp;</h2>
                <h2 className="hero-description1">Full Stack - <span>Developer</span> and UI/UX</h2>
                <h2 className="hero-description2"><span>Freelancer</span></h2>
                <div className="hero-links">
                    <a href="https://dribbble.com/_Ayman_00" target="_blank"><img src={heroimage1} alt="" /></a>
                    <div className="v-line"></div>
                    <a href="https://www.instagram.com/_ayman_0.0/" target="_blank"><img src={heroimage2} alt="" /></a>
                    <div className="v-line"></div>
                    <a href="https://x.com/GaniAyman80448" target="_blank"><img src={heroimage3} alt="" /></a>
                    <div className="v-line"></div>
                    <a href="https://github.com/mr-ayman" target="_blank"><img src={heroimage4} alt="" /></a>
                    <div className="v-line"></div>
                    <a href="https://www.linkedin.com/in/abdul-gani-ayman-60549b290/" target="_blank"><img src={heroimage5} alt="" /></a>
                </div>
                <button className="hero-contact"
                    onClick={() => {
                        document.getElementById("ContactSection").scrollIntoView({
                            behavior: "smooth"
                        });
                    }}>Contact</button>
            </div>
        </section>
    );
};

export default HeroSection; 