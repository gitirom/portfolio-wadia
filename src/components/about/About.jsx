import React from 'react';
import "./about.css";
import Wadia from "../../assets/Custom.jpg";
import Cv from "../../assets/Romdhane CV.pdf";
import Info from "./Info";


const About = () => {
    return (
        <section className="about section" id='about' >
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={Wadia} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    Full Stack Developer, I create web Application / pages with modern Technologies and with a UI / UX interface,
                    I am a passionate about coding and learning new technologies every day. I Have worked on many projects in
                    my career like: E-commerce project & Movie App...
                    </p>

                    <a download="" href={Cv} className="button button--flex">
                        Download CV <span style={{fontSize: "25px", marginLeft: "6px"}} >📑</span>
                    </a>

                </div>
            </div>

        </section>
    )
}

export default About
