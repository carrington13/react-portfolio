import React from 'react'
import { Card, Box, CardHeader, CardBody, CardFooter, Button } from 'grommet';
//import { Github } from 'grommet-icons'


function Project() {
    const projects = [
        {
            name: "Motivation Manager",
            description: "A planner that helps keep you motivated and focused on goals.",
            deployedUrl: "https://johnbanas.github.io/motivation-manager/",
            repoUrl: "https://github.com/JohnBanas/motivation-manager"
        },
        {
            name: "Password Generator",
            description: "Generate a password using character sets you choose!",
            deployedUrl: "https://carrington13.github.io/password-generator/",
            repoUrl: "https://github.com/carrington13/password-generator"
        },
        {
            name: "Budget Tracker",
            description: "A PWA budgeter for clients to add or subtract income",
            deployedUrl: "https://vast-hamlet-45250.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/budget-tracker"
        },
        {
            name: "js-code-quiz",
            description: "A short quiz of basic JavaScript",
            deployedUrl: "https://carrington13.github.io/js-code-quiz/",
            repoUrl: "https://github.com/carrington13/js-code-quiz"
        },
        {
            name: "Tech Blog",
            description: "A CMS-style blog intended for tech-related posts",
            deployedUrl: "https://safe-sea-79163.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/tech-blog"
        },
        {
            name: "Horiseon",
            description: "A front-end landing site(for filler purposes)",
            deployedUrl: "https://carrington13.github.io/horiseon-webpage/",
            repoUrl: "https://github.com/carrington13/horiseon-webpage"
        }
    ];

    return (
        <Box>
        {
            projects.map(project => (
                <Card>
                    <CardHeader pad="medium">{project.name}</CardHeader>
                    <CardBody>{project.description}</CardBody>
                    <CardFooter>
                        <Button>

                        </Button>
                        <Button>
                            
                        </Button>
                    </CardFooter>
                </Card>
            ))
        }
        </Box>
    )
}


export default Project