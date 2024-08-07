import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personnel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ toggleState === 1 ? 
                        "qualification__button qualification__active button--flex"
                        : "qualification__button  button--flex" 
                    }
                        onClick={() => toggleTab(1) }
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                    </div>

                    <div className={ toggleState === 2 ? 
                        "qualification__button qualification__active button--flex"
                        : "qualification__button  button--flex" 
                    }
                    onClick={() => toggleTab(2) }
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active " : 
                "qualification__content  " }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor Degree in software engineering</h3>
                                <span className="qualification__subtitle">ISET - Institute </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2022 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                        <div className="qualification__dataN">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Web Developer internship</h3>
                                <span className="qualification__subtitle">FLESK CONSULTING </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2024 - Feb / May 
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer internship</h3>
                                <span className="qualification__subtitle">Globe Services Inormatique </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2023 - Jan / Feb
                                </div>
                            </div>

                        </div>
                        
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Bourgiba School Monastire </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Internship </h3>
                                <span className="qualification__subtitle"> Tunisie Telecom </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2021 - Jan / Feb
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification
