import React from 'react';
import { Header, Heading } from 'grommet'
import Nav from '../Nav';
//import portait from '../../assets/images/portrait-small.jpg'
import './style.css';

function HeaderComp(props) {
    return (
        <Header className="header">
            <Heading level="1" className="title">Casey Arrington</Heading>
            <Nav
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange} 
            />
        </Header>
    )
};

export default HeaderComp