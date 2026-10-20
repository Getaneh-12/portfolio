
import { useState, useEffect } from "react";

const projects = [
    {
        number: "01",
        title: "Hena Electronics",
        category: "FULL-STACK E-COMMERCE",
        description:
            "A full-stack electronics storefront with a protected admin dashboard for managing products, images, availability, and promotions.",
        details:
            "Built to support an electronics store with a customer-facing storefront and administrative product management. The project demonstrates frontend development, backend integration, database usage, and cloud image handling.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MySQL",
            "Cloudinary",
            "JWT",
        ],
        image: "/images/hena-electronics.png",
        imageAlt: "Hena Electronics storefront screenshot",
        github: "https://github.com/Getaneh-12/hena-electronics",
        live: "https://hena-electronics.onrender.com/",
        featured: true,
    },
    {
        number: "02",
        title: "JobTrack",
        category: "PRODUCTIVITY WEB APP",
        description:
            "A job application tracker for organizing applications, interviews, reminders, and important job-search details.",
        details:
            "Designed to make job searching easier by bringing application records, interview tracking, and reminders into one responsive interface.",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "CSS",
        ],
        image: "/images/jobtrack.png",
        imageAlt: "JobTrack application screenshot",
        github: "https://github.com/Getaneh-12/Jobtrack",
        live: "https://getaneh-12.github.io/Jobtrack/",
        featured: false,
    },
    {
        number: "03",
        title: "Weather App",
        category: "API-POWERED WEB APP",
        description:
            "A weather application for searching cities and viewing current conditions, a five-day forecast, and local time.",
        details:
            "This project integrates weather data into a user-friendly interface, demonstrating API consumption, JavaScript logic, and responsive web design.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Open-Meteo API",
        ],
        image: "/images/Weather_app.png",
        imageAlt: "Weather application screenshot",
        github: "https://github.com/Getaneh-12/Weather_app",
        live: "https://getaneh-12.github.io/Weather_app/",
        featured: false,
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (!selectedProject) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedProject]);

    return (
        <section className="projects section" id="projects">
            <div className="section-container">

                {/* Section Heading */}
                <div className="section-heading">
                    <p>SELECTED WORK</p>

                    <h2>Projects I've Built</h2>

                    <span className="projects-intro">
                        Real projects, practical problem-solving, and
                        technologies I've worked with.
                    </span>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            className={`project-card ${project.featured ? "featured-project" : ""
                                }`}
                            key={project.number}
                        >

                            {/* Project Screenshot */}
                            <div className="project-visual">
                                <div className="project-visual-top">
                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                    <span className="project-type-label">
                                        {project.category}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="project-image-button"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                    aria-label={`View details for ${project.title}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="project-screenshot"
                                        loading="lazy"
                                    />

                                    <span className="project-image-overlay">
                                        View project details
                                        <span aria-hidden="true">↗</span>
                                    </span>
                                </button>
                            </div>

                            {/* Project Information */}
                            <div className="project-content">
                                <p className="project-category">
                                    {project.category}
                                </p>

                                <h3>{project.title}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div
                                    className="project-technologies"
                                    aria-label="Technologies used"
                                >
                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Project Links */}
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Source Code
                                        <span aria-hidden="true"> ↗</span>
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-live-link"
                                    >
                                        Live Demo
                                        <span aria-hidden="true"> ↗</span>
                                    </a>
                                </div>

                                {/* Details Button */}
                                <button
                                    type="button"
                                    className="project-details-button"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                >
                                    Explore project
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="project-modal-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedProject(null);
                        }
                    }}
                >
                    <section
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        <button
                            type="button"
                            className="project-modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close project details"
                        >
                            ×
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.imageAlt}
                            className="project-modal-image"
                        />

                        <div className="project-modal-content">
                            <p className="project-category">
                                {selectedProject.category}
                            </p>

                            <h2 id="project-modal-title">
                                {selectedProject.title}
                            </h2>

                            <p>
                                {selectedProject.details}
                            </p>

                            <h3>Technologies Used</h3>

                            <div className="project-technologies">
                                {selectedProject.technologies.map(
                                    (technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>

                            <div className="project-modal-actions">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source Code ↗
                                </a>

                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-live-link"
                                >
                                    Open Live Demo ↗
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </section>
    );
}

export default Projects;
