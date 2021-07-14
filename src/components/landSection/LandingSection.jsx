import './LandingSection.css'
const landingSection = () => {
    return (
        <section id = "landing">
            <header className="navboar">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-link contact">
                            <a data-scroll href="#landing">
                            Home
                            </a>
                        </li>
                        <li className="nav-link contact">
                            <a data-scroll href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-link contact">
                            <a data-scroll href="#projects">
                                Project
                            </a>
                        </li>
                        <li className="nav-link contact">
                             <a data-scroll href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-link contact">
                            <a data-scroll href="#Contact">
                                Contact
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>

            </main>
        </section>
    )
}

export default landingSection
