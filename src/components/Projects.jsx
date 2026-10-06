function Projects() {
    const projects = [
        {
            number: "01",
            title: "Hena Electronics",
            category: "Full-Stack E-Commerce",
            description:
                "A full-stack e-commerce platform developed for an electronics store to showcase and manage smartphones, laptops, and accessories. The system includes a responsive customer storefront and a protected admin dashboard for managing products, images, availability, and promotions.",
            technologies: [
                "React",
                "Vite",
                "Node.js",
                "Express",
                "MySQL",
                "Cloudinary",
                "JWT"
            ],
            className: "featured-project",
            visual: "hena",
            image: "/images/hena-electronics.png",
            github:
                "https://github.com/Getaneh-12/hena-electronics",
            live:
                "https://hena-electronics.onrender.com/"
        },

        {
            number: "02",
            title: "JobTrack",
            category: "Job Management",
            description:
                "A responsive job application tracking system designed to help users organize job applications, interviews, reminders, and important application information in one place.",
            technologies: [
                "React",
                "Vite",
                "JavaScript",
                "CSS"
            ],
            className: "",
            visual: "jobtrack",
            image: "/images/jobtrack.png",
            github:
                "https://github.com/Getaneh-12/Jobtrack",
            live:
                "https://getaneh-12.github.io/Jobtrack/"
        },

        {
            number: "03",
            title: "Weather App",
            category: "Web Application",
            description:
                "A weather application that allows users to search for cities and view current weather conditions, a five-day forecast, local time, and location-based weather information.",
            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
                "Open-Meteo API"
            ],
            className: "",
            visual: "weather",
            image: "/images/Weather_app.png",
            github:
                "https://github.com/Getaneh-12/Weather_app",
            live:
                "https://getaneh-12.github.io/Weather_app/"
        }
    ];

    return (
        <section
            className="projects section"
            id="projects"
        >
            <div className="section-container">

                {/* Section Heading */}
                <div className="section-heading">
                    <p>MY WORK</p>

                    <h2>
                        Featured Projects
                    </h2>
                </div>

                {/* Projects */}
                <div className="projects-grid">

                    {projects.map((project) => (
                        <article
                            className={`project-card ${project.className}`}
                            key={project.number}
                        >

                            {/* Project Visual */}
                            <div
                                className={`project-visual ${project.visual}`}
                            >

                                {/* Project Number */}
                                <span className="project-number">
                                    {project.number}
                                </span>

                                {/* Hena Electronics Screenshot */}
                                {project.visual === "hena" && (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        className="project-screenshot"
                                    />
                                )}

                                {/* JobTrack Screenshot */}
                                {project.visual === "jobtrack" && (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        className="project-screenshot"
                                    />
                                )}

                                {/* Weather App Screenshot */}
                                {project.visual === "weather" && (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        className="project-screenshot"
                                    />
                                )}

                            </div>

                            {/* Project Content */}
                            <div className="project-content">

                                {/* Category */}
                                <p className="project-category">
                                    {project.category}
                                </p>

                                {/* Title */}
                                <h3>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="project-technologies">

                                    {project.technologies.map(
                                        (technology, index) => (
                                            <span key={index}>
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                                {/* Project Links */}
                                <div className="project-links">

                                    {/* GitHub */}
                                    {project.github !== "#" ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub ↗
                                        </a>
                                    ) : (
                                        <a
                                            href="#"
                                            onClick={(e) =>
                                                e.preventDefault()
                                            }
                                        >
                                            GitHub ↗
                                        </a>
                                    )}

                                    {/* Live Demo */}
                                    {project.live !== "#" ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo ↗
                                        </a>
                                    ) : (
                                        <a
                                            href="#"
                                            onClick={(e) =>
                                                e.preventDefault()
                                            }
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;
