import "./herosection.css"

const HeroSection = () =>{
    return (
        <section className="HeroSection">
            <div className="hero-left">
                <img className="hero-image" src="src/assets/hero-profile.png" alt="" />
            </div>
            <div className="hero-right">
                <h2 className="hero-name">I’m Abdul Gani Ayman</h2>
                <h2 className="hero-description1">Full Stack - <span>Developer</span> and UI/UX</h2>
                <h2 className="hero-description2"><span>Freelancer</span></h2>
                <div className="hero-links">
                    <a href=""><img src="src/assets/heroimg1.svg" alt="" /></a>
                    <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg2.svg" alt="" /></a>
                    <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg3.svg" alt="" /></a>
                    <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg4.svg" alt="" /></a>
                    <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg5.svg" alt="" /></a>
                    {/* <div class="v-line"></div>
                    <a href=""><img src="src/assets/heroimg6.svg" alt="" /></a> */}
                </div>
                <button className="hero-contact">Contact</button>
            </div>
        </section>
    )
}
export default HeroSection;