import React from 'react';
import { Header, Heading } from 'grommet'
import Nav from '../Nav';
import portait from '../../assets/images/portrait-small.jpg'
function HeaderComp(props) {
    return (
        <Header>
            <div className="portait">
                <img src={portait} alt="Casey's portrait"/>
            </div>
            <Heading level="1">Casey Arrington</Heading>
            <Nav
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange} 
            />
        </Header>
    )
};

export default HeaderComp