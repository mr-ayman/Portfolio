import './footer.css'

const FooterSection =() =>{
    return (
        <section className="FooterSection" id='ContactSection'>
                <div className="footer-top">
                    <p className='footer-para'>Get In Touch</p>
                    <h1>Contact Me</h1>
                    <div className="footer-email-linkedin">
                        <div className="footer-containers footer-email">
                            <img src="src/assets/email.svg" alt="" />
                            <p>aganiayman063@gmail.com</p>
                        </div>
                        <div className="footer-containers footer-linkedin"
                        onClick={() => {
                                window.open(
                                    "https://www.linkedin.com/in/abdul-gani-ayman-60549b290/",
                                    "_blank"
                                );
                                }}>
                            <img src="src/assets/linkedin-icon2.png" className='footer-linkedin-icon' alt="" />
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-links">
                    <a href="#AboutSection" className="footer-link">About</a>
                    <a href="#ProjectSection" className="footer-link">Project</a>
                    <a href="#ExperienceSection" className="footer-link">Experience</a>
                    <a href="#ServiceSection" className="footer-link">Services</a>
                </div>
        </section>
    )
}

export default FooterSection;