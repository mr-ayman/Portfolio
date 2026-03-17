import "./herosection.css";
import heroprofile from 'src/assets/hero-profile.png';
import heroimage1 from 'src/assets/heroimg1.svg';
import heroimage2 from 'src/assets/heroimg2.svg';
import heroimage3 from 'src/assets/heroimg3.svg';
import heroimage4 from 'src/assets/heroimg4.svg';
import heroimage5 from 'src/assets/heroimg5.svg';


const HeroSection = () =>{
    return (
        <section className="HeroSection">
            <div className="hero-left">
                <img className="hero-image" src={heroprofile} alt="" />
            </div>
            <div className="hero-right">
                <h2 className="hero-name">I’m Abdul Gani Ayman</h2>
                <h2 className="hero-description1">Full Stack - <span>Developer</span> and UI/UX</h2>
                <h2 className="hero-description2"><span>Freelancer</span></h2>
                <div className="hero-links">
                    <a href="https://dribbble.com/_Ayman_00" target="_blank"><img src={heroimage1} alt="" /></a>
                    <div class="v-line"></div>
                    <a href="https://www.instagram.com/_ayman_0.0/" target="_blank"><img src={heroimage2} alt="" /></a>
                    <div class="v-line"></div>
                    <a href="https://x.com/GaniAyman80448" target="_blank"><img src={heroimage3} alt="" /></a>
                    <div class="v-line"></div>
                    <a href="https://github.com/mr-ayman" target="_blank"><img src={heroimage4} alt="" /></a>
                    <div class="v-line"></div>
                    <a href="https://www.linkedin.com/in/abdul-gani-ayman-60549b290/" target="_blank"><img src={heroimage5} alt="" /></a>
                    {/* <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg6.svg" alt="" /></a> */}
                </div>
                <button className="hero-contact" href="ContactSection"
                    onClick={() => {
                        document.getElementById("ContactSection").scrollIntoView({
                        behavior: "smooth"
                        });
                    }}>Contact</button>
            </div>
        </section>
    )
}
export default HeroSection;