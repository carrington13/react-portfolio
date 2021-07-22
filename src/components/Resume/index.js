import React from 'react';

import './style.css';


function Resume () {
    return (
        <section>
            <div className="resume-container">
                <div className="resume-header flex-column justify-center align-center">
                    <h2>Casey Arrington</h2>
                    <h3>Web Developer</h3> 
                </div>
                <div className="main-body-div flex-row justify-space-between">
                    <div className="left-container">
                        <div className="list-container">
                            <h4>CONTACT:</h4>
                            <ul className="resume-list">
                                <li>
                                    <span><strong>Email:</strong> caseyarrington13@gmail.com</span>
                                </li>
                                <li>
                                    <span><strong>Phone:</strong> 615 788 3513 </span>
                                </li>
                                <li>
                                    <span><strong>Location:</strong> Nashville, Tennessee</span>
                                </li>
                                <li>
                                    <span><strong>linkedIn:</strong> https://www.linkedin.com/in/casey-arrington-67679a203/ </span>
                                </li>
                            </ul>
                        </div>
                        <div className="list-container">
                            <h4>SKILLS:</h4>
                            <ul className="resume-list">
                                <li>HTML</li>
                                <li>CSS</li> 
                                <li>JavaScript</li>
                                <li>jQuery</li> 
                                <li>Node.js</li> 
                                <li>Express.js</li> 
                                <li>React.js</li> 
                                <li>MySql</li> 
                                <li>MongoDB</li> 
                                <li>M-V-C</li> 
                                <li>Object-Oriented Programming</li> 
                                <li>RESTful API</li> 
                                <li>GraphQL API</li> 
                                <li>Object Relational Mapping</li> 
                                <li>Context API</li> 
                                <li>Redux</li> 
                                <li>Progressive Web Apps</li> 
                                <li>and Other Frameworks and Libraries</li>     
                            </ul> 
                        </div>

                    </div>
                    <div className="right-container">
                        <div className="experience-container"> 
                            <h4>PROFESSIONAL EXPERIENCE:</h4>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Project Manager</h5>
                                    <span>Foamworx, Inc || August 2012 - Current</span>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>
                                            <span>Lead and manage crew members to complete projects in a timely manner</span>
                                        </li>
                                        <li>
                                            <span>Ensure quality of each project</span>
                                        </li>
                                        <li>
                                            <span>Liaison between customers and management to come up with unique solutions to ensure customer satisfaction</span>
                                        </li>
                                    </ul>
                                    <span><strong>Contact:</strong>Mahmood Salman || 615 554 6825</span>
                                </div>
                            </div>
                        </div>
                        <div className="education">
                            <h4>EDUCATION:</h4>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Vanderbilt University BootCamp</h5>
                                    <span>February 2021- July 2021</span>
                                </div>
                                <div className="card-body">
                                    <p>A full-stack web developer bootcamp powered by Trilogy Education Services </p>
                                </div>
                            </div>
                        </div>
                        <div className="interests">
                            <h4>INTERESTS</h4>
                            <div className="card">
                                <div className="card-body">
                                    <p>Casey is a full-stack web developer that is proficient with many technologies and frameworks.</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="downloadResumeLink">
                    <a download href="">Download My Resume</a>
                </div>
            </div>
        </section>
    );
}



export default Resume