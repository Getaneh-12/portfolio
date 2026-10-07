import profileImage from "../assets/profile.jpg";
function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-status">
                        <span></span>
                        Available for opportunities
                    </div>

                    <p className="hero-small-text">
                        HELLO, I'M
                    </p>

                    <h1>
                        Getaneh
                    </h1>

                    <h2>
                        <span>
                            Full-Stack Developer
                            & Computer Science Student @AAU
                        </span>
                    </h2>

                    <p className="hero-description">
                        I build modern web applications and practical
                        software solutions with a focus on clean design,
                        useful functionality, and continuous learning.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="primary-button"
                        >
                            View My Projects
                            <span>→</span>
                        </a>

                        <a
                            href="#contact"
                            className="secondary-button"
                        >
                            Let's Connect
                        </a>

                    </div>

                    <div className="hero-tech">

                        <span>React</span>
                        <span>JavaScript</span>
                        <span>Node.js</span>
                        <span>PHP</span>

                    </div>

                </div>


                <div className="hero-image">

                    <div className="hero-orbit orbit-one"></div>

                    <div className="hero-orbit orbit-two"></div>

                    <div className="profile-placeholder">
                        <img
                            src={profileImage}
                            alt="Gech"
                            className="profile-image"
                        />

                        <div className="profile-overlay"></div>
                    </div>

                    <div className="floating-card card-top">
                        <i>many</i>
                        <span>Projects</span>
                    </div>

                    <div className="floating-card card-bottom">
                        <strong><i>CS</i></strong>
                        <span>Student</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;