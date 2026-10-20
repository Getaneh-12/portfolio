
import {
    FaPython,
    FaJava,
    FaPhp,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaPlug,
} from "react-icons/fa";

import {
    SiJavascript,
    SiCplusplus,
    SiVite,
    SiExpress,
    SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const topSkills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const bottomSkills = [
    { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    { name: "Express.js", icon: SiExpress, color: "#AAAAAA" },
    { name: "REST APIs", icon: FaCode, color: "#FF6C37" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#AAAAAA" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Responsive Design", icon: FaCode, color: "#38BDF8" },
    { name: "API Integration", icon: FaPlug, color: "#A78BFA" },
];

function SkillRow({ skills, direction }) {
    const renderSkills = (group) =>
        skills.map(({ name, icon: Icon, color }) => (
            <div className="skill-item" key={`${group}-${name}`}>
                <Icon
                    className="skill-icon"
                    style={{ color }}
                    aria-hidden="true"
                />
                <span>{name}</span>
            </div>
        ));

    return (
        <div className="skills-row">
            <div className={`skills-track ${direction}`}>
                <div className="skills-group">
                    {renderSkills("first")}
                </div>

                <div className="skills-group" aria-hidden="true">
                    {renderSkills("second")}
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className="section-container">
                <div className="section-heading">
                    <p>MY SKILLS</p>
                    <h2>Technologies I Work With</h2>
                </div>

                <div className="skills-marquee">
                    <SkillRow
                        skills={topSkills}
                        direction="move-left"
                    />

                    <SkillRow
                        skills={bottomSkills}
                        direction="move-right"
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;
