import { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services" >
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i class="uil uil-brackets-curly services__modal-icon "></i>
                        <h3 className="services__title">Full Stack <br/> Developer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)} >View More
                    <i className="uil uil-arrow-right services__button-icon "></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}  className="uil uil-times services__modal-close "></i>

                            <h3 className="services__modal-title">Full Stack Developer</h3>
                            <p className="services__modal-description">
                                Service Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Developing back-end website applications.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Designing and developing APIs.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Meeting both technical and consumer needs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class="uil uil-brackets-curly services__modal-icon "></i>
                        <h3 className="services__title">Front End <br/> Developer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More 
                    <i className="uil uil-arrow-right services__button-icon "></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close "></i>

                            <h3 className="services__modal-title">Front End Developer</h3>
                            <p className="services__modal-description">
                                Service Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Designing user interactions on web pages.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Ensuring cross-platform optimization for mobile phones.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle modal-icon "></i>
                                    <p className="services__modal-info">
                                        Ensuring responsiveness of applications.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }

export default Services
