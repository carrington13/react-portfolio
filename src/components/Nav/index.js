import React from 'react';
import { Nav, Anchor } from 'grommet'

/* Changes TODO: 
    Make it so anchors are dynamically created to DRY up the code
    Add an array with each page <name> 
*/
function Navigation(props) {
    return (
        <Nav direction="row" background="brand" pad="medium">
            <Anchor href="#about" label="About" 
                 onClick={()=> {
                props.handlePageChange('About')
                }} 
            />
            <Anchor href="#portfolio" label="Portfolio" 
                 onClick={()=> {
                props.handlePageChange('Portfolio')
                 }} 
            />
            <Anchor href="#resume" label="Resume"
                 onClick={()=> {
                props.handlePageChange('Resume')
                 }} 
            />
            <Anchor href="#contact" label="Contact Me"
                 onClick={()=> {
                props.handlePageChange('Contact')
                }}
            /> 
        </Nav>
    );
}



export default Navigation