import React from 'react';
import { Nav, Anchor } from 'grommet'
//import { Github, Linkedin, Facebook } from 'grommet-icons';



function Navigation () {
    return (
        <Nav direction="row" background="brand" pad="medium">
            <Anchor href="#about" label="About" />
            <Anchor href="#portfolio" label="Portfolio" />
            <Anchor href="#resume" label="Resume" />
            <Anchor href="#contact" label="Contact Me" />
        </Nav>
    );
}



export default Navigation