import React from 'react';
import { Accordion, AccordionPanel, Box, Image} from 'grommet'


function About () {
    //const techArr = ['HTML', 'CSS','JS', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'MySql', 'M-V-C', 'GraphQL', 'RESTful API', 'OOP', 'ORM', 'PWA', 'Bootstrap', 'NoSQL', 'SQL', 'and various other libraries and frameworks' ]
    
    return (
        <section>
            <h2 id="about">About Me</h2>
            <Accordion multiple="true">
                <AccordionPanel label="Personal" animate="true">
            <div>
                <img alt="Casey Arrington"></img>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
            </div>
                </AccordionPanel>
                <AccordionPanel label="Professional" animate="true"></AccordionPanel>
                <AccordionPanel label="Skills" animate="true">
            <div>
                <h3>Technical Skills:</h3>
                <ul>
                </ul>
            </div>
                </AccordionPanel>
            </Accordion>
        </section>
    );
}



export default About