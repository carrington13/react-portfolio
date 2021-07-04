import React from 'react';
import { Header, Heading } from 'grommet'
import Nav from '../Nav';

function HeaderComp(props) {
    return (
        <Header>
            <Heading level="1">Casey Arrington</Heading>
            <Nav
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange} 
            />
        </Header>
    )
};

export default HeaderComp