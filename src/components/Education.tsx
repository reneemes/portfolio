import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Education.scss';

function Education() {
    return (
    <div className="container" id="education">
        <div className="skills-container">
            <h1>Education</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>Turing School of Software & Design</h3>
                    <p>Proficient in HTML, CSS, JavaScript, React, Angular, Ruby, and Rails</p>
                    <p>Hands-on experience through building projects, daily lessons, and professional development activities</p>
                    <p>Experience creating dynamic and responsive web applications</p>
                </div>

                <div className="skill">
                    <h3>Pasco-Hernando State College</h3>
                    <p>AS in Unmanned Vehicle Systems Operations</p>
                    <p>Hands-on training in Unmanned Aerial Systems, Unmanned Grounds Systems, Unmanned Maritime Systems and their associated environments</p>
                    <p>Understanding of hazardous operations, government regulations, surveillance, data collection, and the engineering aspects of Unmanned Systems</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Education;