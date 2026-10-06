function Education() {
    return (
        <section className="education section" id="education">

            <div className="section-container">

                <div className="section-heading">
                    <p>MY BACKGROUND</p>
                    <h2>Education & Experience</h2>
                </div>

                <div className="education-layout">

                    {/* Education */}
                    <div className="education-column">

                        <div className="column-title">
                            <div className="column-icon">
                                🎓
                            </div>

                            <div>
                                <span>EDUCATION</span>
                                <h3>Academic Journey</h3>
                            </div>
                        </div>

                        <div className="education-card">

                            <div className="education-card-top">
                                <span className="education-date">
                                    2023 — 2027
                                </span>

                                <span className="education-status">
                                    In Progress
                                </span>
                            </div>

                            <h3>
                                Bachelor of Science in Computer Science
                            </h3>

                            <h4>
                                Addis Ababa University
                            </h4>

                            <p>
                                Studying Computer Science with a focus on
                                programming, software development, databases,
                                operating systems, web development, and
                                computer systems.
                            </p>

                            <div className="education-tags">
                                <span>Programming</span>
                                <span>Software Development</span>
                                <span>Databases</span>
                                <span>Web Development</span>
                                <span>Data Structures and Algorithms</span>
                                <span>Object-Oriented Programming (OOP)</span>
                                <span>Operating Systems</span>
                                <span>Networking</span>
                                <span>Artificial Intelligence</span>
                                <span>Mobile App Development</span>
                            </div>

                        </div>

                    </div>


                    {/* Experience */}
                    <div className="education-column">

                        <div className="column-title">
                            <div className="column-icon">
                                💻
                            </div>

                            <div>
                                <span>EXPERIENCE</span>
                                <h3>What I'm Building</h3>
                            </div>
                        </div>

                        <div className="experience-card">

                            <div className="experience-number">
                                01
                            </div>

                            <div className="experience-content">

                                <span>
                                    Personal Project
                                </span>

                                <h3>
                                    Full-Stack Web Development
                                </h3>

                                <p>
                                    Building complete web applications using
                                    React, Node.js, Express, MySQL, APIs, and
                                    modern frontend technologies.
                                </p>

                                <div className="experience-tech">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MySQL</span>
                                </div>

                            </div>

                        </div>


                        <div className="experience-card">

                            <div className="experience-number">
                                02
                            </div>

                            <div className="experience-content">

                                <span>
                                    Current Focus
                                </span>

                                <h3>
                                    Full-Stack Development & Problem Solving
                                </h3>

                                <p>
                                    building real-world web applications and improving
                                    my skills in programming fundamentals,
                                    algorithms, data structures, and
                                    problem-solving skills through practical
                                    exercises.
                                </p>

                                <div className="experience-tech">
                                    <span>web development</span>
                                    <span>C++</span>
                                    <span>Algorithms</span>
                                    <span>DSA</span>
                                </div>

                            </div>

                        </div>


                        <div className="experience-card">

                            <div className="experience-number">
                                03
                            </div>

                            <div className="experience-content">

                                <span>
                                    Development
                                </span>

                                <h3>
                                    Building Real-World Projects
                                </h3>

                                <p>
                                    Developing projects such as Hena
                                    Electronics, JobTrack, and Weather App
                                    to gain practical software development
                                    experience.
                                </p>

                                <div className="experience-tech">
                                    <span>Git</span>
                                    <span>GitHub</span>
                                    <span>VS Code</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;