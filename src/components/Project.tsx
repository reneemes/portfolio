import React from "react";
import dtrh from '../assets/images/down-the-rabbit-hole.png';
import rancid from '../assets/images/rancid.png';
import tracker from '../assets/images/tracker.png'
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    const labelsFirst = [
        "React",
        "React Router",
        "JavaScript",
        "HTML",
        "CSS",
        "Cypress",
        "Ruby on Rails",
        "RSpec",
        "SimpleCov",
        "Webmock & VCR"
    ];

    const labelsSecond = [
        "React",
        "React Router",
        "JavaScript",
        "HTML",
        "CSS",
        "Cypress"
    ];

    const trackerTech = [
        "React",
        "React Router",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "Cypress",
        "Ruby on Rails",
        "RSpec",
        "SimpleCov",
        "JWT Tokens"
    ];

    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
        <div className="project">
                <a href="https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/" target="_blank" rel="noreferrer"><img src={tracker} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/" target="_blank" rel="noreferrer"><h2>Tracker CRM</h2></a>
                <p>An application for tracking companies, managing contacts, and organizing job applications all in one place.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech:</span>
                    {trackerTech.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className="project">
                <a href="https://down-the-rabbit-hole.netlify.app/" target="_blank" rel="noreferrer"><img src={dtrh} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://down-the-rabbit-hole.netlify.app/" target="_blank" rel="noreferrer"><h2>Down the Rabbit Hole</h2></a>
                <p>Designed and developed a full stack educational web application intended to immerse users in the fascinating world of animals and their ecosystems.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech:</span>
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className="project">
                <a href="https://rancid-tomatillos-ecru.vercel.app" target="_blank" rel="noreferrer"><img src={rancid} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rancid-tomatillos-ecru.vercel.app" target="_blank" rel="noreferrer"><h2>Rancid Tomatillos</h2></a>
                <p>Developed an application which allows users to browse and vote on a collection of movies, with features like live search, movie details, and real-time vote updates.</p>
                
                <div className="flex-chips">
                    <span className="chip-title">Tech:</span>
                    {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;