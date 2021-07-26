import React from 'react'
import { CardBody, CardFooter, Anchor, Image } from 'grommet';
//import { Github } from 'grommet-icons'
import motivationImage from "../../assets/images/project/motivation.jpg";
import passwordImage from "../../assets/images/project/password-generator.png";
import budgetImage from '../../assets/images/project/budget-tracker.png'
import codeImage from '../../assets/images/project/code-quiz.png';
import augmentedImage from '../../assets/images/project/augmentedImage.png';
import blogImage from '../../assets/images/project/tech-blog.png';

import './style.css'

function Project() {
    const projects = [
        {
            name: "Motivation Manager",
            description: "A planner that helps keep you motivated and focused on goals.",
            deployedUrl: "https://johnbanas.github.io/motivation-manager/",
            repoUrl: "https://github.com/JohnBanas/motivation-manager",
            image: motivationImage,
            key:"one"
        },
        {
            name: "Password Generator",
            description: "Generate a password using character sets you choose!",
            deployedUrl: "https://carrington13.github.io/password-generator/",
            repoUrl: "https://github.com/carrington13/password-generator",
            image: passwordImage,
            key:"two"
        },
        {
            name: "Budget Tracker",
            description: "A PWA budgeter for clients to add or subtract income",
            deployedUrl: "https://vast-hamlet-45250.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/budget-tracker",
            image: budgetImage,
            key:"three"
        },
        {
            name: "js-code-quiz",
            description: "A short quiz of basic JavaScript",
            deployedUrl: "https://carrington13.github.io/js-code-quiz/",
            repoUrl: "https://github.com/carrington13/js-code-quiz",
            image: codeImage,
            key: "four"
        },
        {
            name: "Tech Blog",
            description: "A CMS-style blog intended for tech-related posts",
            deployedUrl: "https://safe-sea-79163.herokuapp.com/",
            repoUrl: "https://github.com/carrington13/tech-blog",
            image: blogImage,
            key: "five"
        },
        {
            name: "Augmented Retail",
            description: "A small e-commerce store that dabbles into augmented reality powered by MERN",
            deployedUrl: " https://quiet-woodland-22294.herokuapp.com/ ",
            repoUrl: "https://github.com/joshacross/final-project",
            image: augmentedImage,
            key: "six"
        }
    ];


    return (
        <>
        {
            projects.map((project )=> (
                <div className="card project-card" style={{backgroundImage: project.image}} key={project.key}>
                    
                    <div className="card-header"pad="medium">{project.name}</div>
                    <CardBody key={project.description}>
                        <Image alt="Project image" fit="fill" src={project.image} height="150px"/>
                        {project.description}</CardBody>
                    <CardFooter>
                        <Anchor href={project.repoUrl}  target="_blank" color="white">GitHub Repo</Anchor>
                        <Anchor href={project.deployedUrl} target="_blank" color="white">Deployed App</Anchor>
                    </CardFooter>
                </div>
            
            ))
        }

        </>
    )
}


export default Project