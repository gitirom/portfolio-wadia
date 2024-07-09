import "./contact.css";
import React, { useRef,  } from 'react';
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();
    
            emailjs.sendForm(
                'service_0mj8aa8',
                'template_irq4uhv',
                form.current,
                'Y7-d2do67SOVUA6fp'
            )
            .then((result) => {
                console.log(result.text);
                toast.success("Message Has Sended");
                e.target.reset()
            }, (error) => {
            console.log(error.text);
            });
        };
    return (
        <section className="contact section" id="contact" >
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">wadiaromdane10@gmail.com</span>

                            <a href="mailto:wadiaromdane10@gmail.com.com" className="contact__button">
                                Write Me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+216 56 472 644</span>

                            <a href="https://api.whatsapp.com/send?phone=56472644&text=Hello, more information!" className="contact__button">
                                Write Me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>

                            <h3 className="contact__card-title">linkedin</h3>
                            <span className="contact__card-data">Romdhane Wadia</span>

                            <a href="https://www.linkedin.com/in/romdhane-wadia-93ba1a240/" className="contact__button">
                                Write Me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"   />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Name</label>
                            <textarea name="project"  cols="30" rows="10" className="contact__form-input" placeholder="Write your project"  ></textarea>
                        </div>
                    </form>

                    <button id="Button" className="button button--flex" onClick={sendEmail}>
                    Say Message <span style={{fontSize: "1.6rem", marginLeft: "15px"}} >📧</span>
                </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
