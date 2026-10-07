function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Footer top */}
                <div className="footer-top">

                    <div className="footer-brand">

                        <a href="#home" className="logo">
                            <img
                                src="images/logo.jpg"
                                alt="GECH Logo"
                            />
                        </a>

                        <pre><p>
                            FullStack Developer &
                            Computer Science Student @AAU
                        </p></pre>
                        <p className="footer-description">
                            Building practical software, learning continuously,
                            and turning ideas into useful digital solutions.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div className="footer-column">

                        <h4>Navigation</h4>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>

                    </div>


                    {/* More */}
                    <div className="footer-column">

                        <h4>Explore</h4>

                        <a href="#education">Education</a>
                        <a href="#contact">Contact</a>
                        <a href="#projects">My Work</a>

                    </div>


                    {/* Connect */}
                    <div className="footer-column">

                        <h4>Connect</h4>

                        <a
                            href="https://github.com/Getaneh-12/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/getaneh-dachew/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn ↗
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gech67665@gmail.com">
                            Email ↗
                        </a>
                        <a
                            href="https://t.me/gech6225"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Telegram ↗
                        </a>
                    </div>

                </div>


                {/* Footer bottom */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} Gech. All rights reserved.
                    </p>

                    <a href="#home" className="back-to-top">
                        Back to top ↑
                    </a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
