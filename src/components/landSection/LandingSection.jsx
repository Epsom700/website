import me from '../assets/me.jpg'

import './LandingSection.css'

const landingSection = () => {
    return (
        <section id = "landing">
            <header className="navboar">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-link ">
                            <a data-scroll href="#landing">
                            Home
                            </a>
                        </li>
                        <li className="nav-link ">
                            <a data-scroll href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-link ">
                            <a data-scroll href="#projects">
                                Project
                            </a>
                        </li>
                        <li className="nav-link">
                             <a data-scroll href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-link">
                            <a data-scroll href="#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="landing">
                <article>
                    <h2 className="main-heading">Hey, I am<span className="orange"> Arjun Singh</span> </h2>
                    <h3 className="sub-heading">Welcome to my <span className="green"> Website</span></h3>
                </article>
                <img src={me} alt="me" className="me"></img>
                <a data-scroll href="#projects" className="chevron">
                    <div class="mouse_scroll">
                        <div class="mouse">
                            <div class="wheel"></div>
                        </div>
                        <div>
                            <span class="m_scroll_arrows unu"></span>
                            <span class="m_scroll_arrows doi"></span>
                            <span class="m_scroll_arrows trei"></span>
                        </div>  
                    </div>
                </a>
            </main>
        </section>
    )
}

export default landingSection
