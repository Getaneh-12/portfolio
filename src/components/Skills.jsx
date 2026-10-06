function Skills() {

    const skills = [
        {
            title: "Programming",
            items: [
                "JavaScript",
                "Python",
                "Java",
                "C++",
                "PHP"
            ]
        },
        {
            title: "Frontend",
            items: [
                "HTML",
                "CSS",
                "React",
                "Vite"
            ]
        },
        {
            title: "Backend",
            items: [
                "Node.js",
                "Express.js",
                "REST APIs"
            ]
        },
        {
            title: "Database",
            items: [
                "MySQL"
            ]
        },
        {
            title: "Tools",
            items: [
                "Git",
                "GitHub",
                "VS Code"
            ]
        },
        {
            title: "Other",
            items: [
                "Responsive Design",
                "API Integration",
                "Data Structures and Algorithms",
                "Object-Oriented Programming (OOP)"
            ]
        }
    ];

    return (
        <section className="skills section" id="skills">

            <div className="section-container">

                <div className="section-heading">
                    <p>MY SKILLS</p>
                    <h2>Technologies I Work With</h2>
                </div>

                <div className="skills-grid">

                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>

                            <h3>{skill.title}</h3>

                            <div className="skill-list">

                                {skill.items.map((item, itemIndex) => (
                                    <span key={itemIndex}>
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;