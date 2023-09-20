import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Romdhane</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/romdhane-wadia-93ba1a240/" className="footer__social-link" target='_blank'>
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="" className="footer__social-link" target='_blank'>
                <i class="bx bxl-discord"></i>
            </a>
            <a href="https://github.com/gitirom" className="footer__social-link" target='_blank'>
                <i className="bx bxl-github"></i>
            </a>
                </div>

                <span className="footer__copy">
                    &#169; Crypticalcoder. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
