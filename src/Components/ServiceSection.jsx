import "./servicesection.css"

const ServiceSection = () =>{
    return (
        <section className="ServiceSection" id="ServiceSection">
            <div className="service-top">
                <h1>Services</h1>
                <hr className="service-line" />
            </div>
            <div className="service-bottom">
                <div className="service-container1 service-container">
                    <img src="src/assets/uiux.svg" alt="" />
                    <hr className="line-service" />
                    <h2>UI/UX - Design</h2>
                    <p>Creating intuitive and visually <br></br>appealing designs that enhance user <br></br>experience through wireframing, <br></br>prototyping, and interaction design.</p>
                </div>
                <div className="service-container1 service-container">
                    <img src="src/assets/full-stack.svg" alt="" />
                    <hr className="line-service" />
                    <h2>Full-stack Developer</h2>
                    <p>Building fast, responsive, and <br></br>interactive websites using modern <br></br>technologies like React.js, JavaScript,<br></br>Nodejs, and Tailwind CSS</p>
                </div>
            </div>
        </section>
    )
}
export default ServiceSection;