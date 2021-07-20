import React from 'react';
import { Nav, Anchor } from 'grommet';
import './style.css';

/* Changes TODO: 
    Make it so anchors are dynamically created to DRY up the code
    Add an array with each page <name> 
*/
function Navigation(props) {

    return (
        <Nav direction="row" pad="medium">
            <Anchor size="large" className="anchor" href="#about" label="About" 
                 onClick={()=> {
                props.handlePageChange('About')
                }} 
            />
            <Anchor size="large" className="anchor" href="#portfolio" label="Portfolio" 
                 onClick={()=> {
                props.handlePageChange('Portfolio')
                 }} 
            />
            <Anchor size="large" href="#resume" className="anchor" label="Resume"
                 onClick={()=> {
                props.handlePageChange('Resume')
                 }} 
            />
            <Anchor size="large" href="#contact" className="anchor" label="Contact Me"
                 onClick={()=> {
                props.handlePageChange('Contact')
                }}
            /> 
        </Nav>
    );
}



export default Navigation