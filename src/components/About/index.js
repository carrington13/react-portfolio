import React from 'react';
import './style.css'
import portrait from '../../assets/images/portrait/portrait-small.jpg'

function About () {
    
    return (
        <section className="bio-text">
            <div>
                <div className="flex-row justify-space-between">
                    <div className="bio-header-container">
                        <h2 id="about" className="bio-heading">About Me</h2>
                    </div>
                </div>
                <div>
                    <p className="bio-font">
                            Hi, my name is Casey Arrington and I am a full stack web developer. After nearly a decade in construction, I discovered a passion
                        for computer coding. After a bit of self-teaching and using online resources, I decided to enroll in a full-stack web developer bootcamp 
                        through Vanderbilt University. Throughout the course of the bootcamp, I gained skills and proficiencies using many modern, popular
                        technologies such as the MERN-stack, Progressive Web Apps, and State -with React's Context API and Redux. There are many solutions to almost any problem, and
                        being well-versed in many technologies, languages, frameworks, and paradigms all me to have the versatility to craft the best solution for each solution. As any web developer knows, 
                        being able to read documentation and quickly pick up the required knowledge is a must-have skill, and is a skill that I have learned and honed over the past 6 months and will continue to sharpen.
                        Learning new skills and pushing myself has always been an integral part of me and is one that continually 
                        drives me to keep expanding my knowledge and skill base. 
                        <br /> <br />
                            I am 27 years old and I live in middle Tennessee. Growing up in Tennessee, which is full of natural beauty, has instilled in me a deep connection with
                            nature. I love doing anything in the Great Outdoors. From hiking to scuba diving to gardening, I find great comfort and enjoyment
                        from doing almost anything outside. Although I am not as well-traveled as I would like to be, I still manage to go out and explore both my state and 
                        the beautiful United States as a whole. If it is outside, it has my name on it. I also enjoy reading and playing video games, if I ever manage to get some 
                        time to spare.

                    </p>
                </div>
            </div>
        </section>
    );
}



export default About