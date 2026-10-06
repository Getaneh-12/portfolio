import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <div className="navbar-container">

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    GECH
                </a>


                {/* Desktop / Mobile Navigation */}
                <div
                    className={`navbar-links ${menuOpen ? "active" : ""
                        }`}
                >
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        Education
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>

                    <a
                        href="#contact"
                        className="navbar-button"
                        onClick={closeMenu}
                    >
                        Let's Talk
                    </a>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className={`menu-button ${menuOpen ? "active" : ""
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

        </nav>
    );
}

export default Navbar;