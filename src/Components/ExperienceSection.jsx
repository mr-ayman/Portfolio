import "./experience.css";
import python from "../assets/Python.svg";
import java from "../assets/Java.svg";
import mysql from "../assets/mysql.svg";
import c from "../assets/C.svg";
import cpp from "../assets/c++.svg";
import reacticon from "../assets/reacticon.png";
import js from "../assets/JavaScript.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import figma from "../assets/Figma.svg";
import php from "../assets/php.svg";
import bs from "../assets/Bootstrap.svg";
import tc from "../assets/tailwindcssicon.png";

const ExperienceSection = () =>{
    return (
        <section className="ExperienceSection" id="ExperienceSection">
            <div className="experience-top">
                <h1>Experience</h1>
                <hr className="experience-line" />
            </div>
            <div className="experience-bottom">
                <div className="experience-techstack">
                    <div className="techbtop">
                        <h2>Tech Stack</h2>
                        <hr />
                    </div>
                
                    <div className="tech-boxes">
                        <div className="tech-containers tech-container1">
                            <img src={python} alt="" />
                            <p>Python</p>
                        </div>
                        <div className="tech-containers tech-container2">
                            <img src={java} alt="" />
                            <p>Java</p>
                        </div>
                        <div className="tech-containers tech-container3">
                            <img src={mysql} alt="" />
                            <p>MySql</p>
                        </div>
                        <div className="tech-containers tech-container4">
                            <img src={c} alt="" />
                            <p>C</p>
                        </div>
                        <div className="tech-containers tech-container5">
                            <img src={cpp} alt="" />
                            <p>C++</p>
                        </div>
                        <div className="tech-containers tech-container6">
                            <img src={reacticon} alt="" />
                            <p>React</p>
                        </div>
                        <div className="tech-containers tech-container7">
                            <img src={js} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-containers tech-container8">
                            <img src={html} alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="tech-containers tech-container9">
                            <img src={css} alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="tech-containers tech-container10">
                            <img src={figma} alt="" />
                            <p>Figma</p>
                        </div>
                        <div className="tech-containers tech-container11">
                            <img src={php} alt="" />
                            <p>PHP</p>
                        </div>
                        <div className="tech-containers tech-container12">
                            <img src={bs} alt="" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="tech-containers tech-container13">
                            <img src={tc} alt="" />
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ExperienceSection;