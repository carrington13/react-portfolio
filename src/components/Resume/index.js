import React from 'react';
import { Box, Image } from 'grommet'

import './style.css';


function Resume () {
    return (
        <Box
            direction="row"
            border={{ color: '#1C0F13', size: 'large' }}
            pad="medium"
            className="resume-container"
            margin="medium"
        >
            <Box pad="large" background="dark-3"> 
                <h2>Casey Arrington</h2>
                
            </Box>
            <Box pad="large" background="light-3" />
            <Box pad="large" background="dark-3" />
            <Box pad="large" background="light-3" />
            <Box pad="large" background="dark-3" />
            <Box pad="large" background="light-3" />
         </Box>
    );
}



export default Resume