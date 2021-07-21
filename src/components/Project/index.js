import React from 'react'
import { Card, Box, CardHeader, CardBody, CardFooter, Anchor, Image } from 'grommet';
//import { Github } from 'grommet-icons'
import motivation from "../../assets/images/project/motivation.jpg"

function Project() {
    const projects = [
        {
            name: "Motivation Manager",
            description: "A planner that helps keep you motivated and focused on goals.",
            deployedUrl: "https://johnbanas.github.io/motivation-manager/",
            repoUrl: "https://github.com/JohnBanas/motivation-manager",
            image: { motivation }
        },
        {
            name: "Password Generator",
            description: "Generate a password using character sets you choose!",
            deployedUrl: "https://carrington13.github.io/password-generator/",
            repoUrl: "https://github.com/carrington13/password-generator",
            image: "../../assets/images/project/password-generator.png"
        },
        {
            name: "Budget Tracker",
            description: "A PWA budgeter for clients to add or subtract income",
            deployedUrl: "https://vast-hamlet-45250.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/budget-tracker",
            image: "../../assets/images/project/budget-tracker.png"
        },
        {
            name: "js-code-quiz",
            description: "A short quiz of basic JavaScript",
            deployedUrl: "https://carrington13.github.io/js-code-quiz/",
            repoUrl: "https://github.com/carrington13/js-code-quiz",
            image: "../../assets/images/project/code-quiz.png"
        },
        {
            name: "Tech Blog",
            description: "A CMS-style blog intended for tech-related posts",
            deployedUrl: "https://safe-sea-79163.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/tech-blog",
            image: "../../assets/images/project/tech-blog.png"
        },
        {
            name: "Horiseon",
            description: "A front-end landing site(for filler purposes)",
            deployedUrl: "https://carrington13.github.io/horiseon-webpage/",
            repoUrl: "https://github.com/carrington13/horiseon-webpage",
            image: "../../assets/images/project/horiseon.png"
        }
    ];

    return (
        
        <Box>
        {
            projects.map(project => (
                <Card className="project"key={project.name}>
                    <Image href={project.image} className="project-img"/>
                    <CardHeader pad="medium">{project.name}</CardHeader>
                    <CardBody>{project.description}</CardBody>
                    <CardFooter>
                        <Anchor href={project.repoUrl} target="_blank" >GitHub Repo</Anchor>
                        <Anchor href={project.deployedUrl} target="_blank">Deployed App</Anchor>
                    </CardFooter>
                </Card>
            ))
        }
        </Box>
    )
}


export default Project