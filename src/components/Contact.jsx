import { FaTelegramPlane } from "react-icons/fa";
function Contact() {
    return (
        <section className="contact section" id="contact">

            <div className="section-container">

                <div className="section-heading">
                    <p>GET IN TOUCH</p>
                    <h2>Let's Connect</h2>
                </div>

                <div className="contact-wrapper">

                    {/* Left side */}
                    <div className="contact-intro">

                        <span className="contact-label">
                            HAVE A PROJECT IN MIND?
                        </span>

                        <h3>
                            Let's build something
                            <span> useful together.</span>
                        </h3>

                        <p>
                            I'm interested in software development,
                            internships, collaborations, and opportunities
                            where I can learn, contribute, and build useful
                            technology.
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gech67665@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-main-button"
                        >
                            Send Me an Email
                            <span>→</span>
                        </a>

                    </div>


                    {/* Right side */}
                    <div className="contact-info">

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gech67665@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon">
                                ✉
                            </div>

                            <div className="contact-card-content">
                                <span>Email</span>
                                <strong>
                                    gech67665@gmail.com
                                </strong>
                            </div>

                            <span className="contact-arrow">
                                ↗
                            </span>
                        </a>


                        <a
                            href="https://github.com/Getaneh-12/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon github-icon">
                                Git
                            </div>

                            <div className="contact-card-content">
                                <span>GitHub</span>
                                <strong>
                                    View my projects
                                </strong>
                            </div>

                            <span className="contact-arrow">
                                ↗
                            </span>
                        </a>


                        <a
                            href="https://www.linkedin.com/in/getaneh-dachew/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon linkedin-icon">
                                in
                            </div>

                            <div className="contact-card-content">
                                <span>LinkedIn</span>
                                <strong>
                                    Connect with me
                                </strong>
                            </div>

                            <span className="contact-arrow">
                                ↗
                            </span>
                        </a>

                        <a
                            href="https://t.me/gech6225"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon telegram-icon">
                                <FaTelegramPlane />
                            </div>

                            <div className="contact-card-content">
                                <span>Telegram</span>
                                <strong>
                                    chat with me
                                </strong>
                            </div>

                            <span className="contact-arrow">
                                ↗
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;