import React from 'react';
import logo from './assets/Logo.png';
import githubLogo from './assets/github-icon.png';
import linkedinLogo from './assets/linkedin-icon.png';
import resume from './assets/RamPrasanth_Resume.pdf';

const Header = () => {
    return (
        <section id="hero">
            <div className='section-container'>
                <img src={logo} alt="" className="my-16 text-left rounded-lg" />
                <div className="flex flex-col mb-20 mt-20 pt-16">
                    <div>
                        <h3> Hi<span className='wave'>👋</span>! My name is Ramprasanth Murugappan</h3>
                        <p className="section-content mb-10 text-2xl">
                            Senior Front End Developer
                        </p>
                        <div className="button-container">
                            <a href={resume} target="_blank" download={'RamPrasanth_Resume'} className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">Download Resume</a>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 mt-6">
                            <a href='https://github.com/RAMPRASANT' target="_blank"><img src={githubLogo} alt="github" /></a>
                            <a href='https://www.linkedin.com/in/ram-prasanth-murugappan-665a18185/' target="_blank"><img src={linkedinLogo} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Header;
