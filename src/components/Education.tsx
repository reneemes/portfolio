import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Education.scss';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

const labelsSecond = [
    "4.0"
];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

function Education() {
    return (
    <div className="container" id="education">
        <div className="skills-container">
            <h1>Education</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <h3>Turing School of Software & Design</h3>
                    <p>Proficient in HTML, CSS, JavaScript, React, Ruby, and Rails</p>
                    <p>Hands-on experience through building projects, daily lessons, and professional development activities</p>
                    <p>Experience creating dynamic and responsive web applications</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <h3>Pasco-Hernando State College</h3>
                    <p>AS in Unmanned Vehicle Systems Operations</p>
                    <p>Hands-on training in Unmanned Aerial Systems, Unmanned Grounds Systems, Unmanned Maritime Systems and their associated environments</p>
                    <p>Onderstanding of hazardous operations, government regulations, surveillance, data collection, and the engineering aspects of Unmanned Systems</p>
                    {/* <p>GPA: 4.0</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">GPA:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional Education building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                {/* </div> */} 
            </div>
        </div>
    </div>
    );
}

export default Education;