import "./about.css";

const AboutSection = () => {
    return (
        <section className="AboutSection">
            <div className="about-top">
                <h1>About Me</h1>
                <hr className="AboutLine" />
            </div>
            
            <div className="about-bottom">
                <div className="about-left">
                    <img className="about-profile" src="src/assets/about-profile.png" alt="" />
                </div>
                <div className="about-right">
                    <div className="About-right-top">
                        <div className="about-experience about-box">
                            <img src="src/assets/Experience.svg" alt="" />
                            <h3>Experience</h3>
                            <p>Nothing</p>
                        </div>
                        <div className="about-education about-box">
                            <img src="src/assets/Education.svg" alt="" />
                            <h3>Education</h3>
                            <p>3rd Year B.Tech CSE(IOT)</p>
                        </div>
                    </div>
                    <p className="about-para">I’m Ayman, a Full Stack Developer & UI/UX Freelancer passionate <br></br>about building intuitive, high-performance web experiences. As <br></br>the Co-founder of Frontenlab, I focus on simplifying development <br></br>with expert insights and practical solutions</p>
                </div>
            </div>
        </section>
    )
}
export default AboutSection;