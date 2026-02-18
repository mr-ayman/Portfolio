import './footer.css'

const FooterSection =() =>{
    return (
        <section className="FooterSection">
                <div className="footer-top">
                    <p className='footer-para'>Get In Touch</p>
                    <h1>Contact Me</h1>
                    <div className="footer-email-linkedin">
                        <div className="footer-containers">
                            <img src="src/assets/email.svg" alt="" />
                            <p>aganiayman063@gmail.com</p>
                        </div>
                        <div className="footer-containers">
                            <img src="src/assets/email.svg" alt="" />
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-links">
                    <a href="" className="footer-link">About</a>
                    <a href="" className="footer-link">Project</a>
                    <a href="" className="footer-link">Experience</a>
                    <a href="" className="footer-link">Services</a>
                </div>
        </section>
    )
}

export default FooterSection;