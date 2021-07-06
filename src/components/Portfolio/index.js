import React from 'react'
import Project from '../Project'
import { Box, Carousel } from 'grommet'

function Portfolio() {
    return (
        <Box height="large" width="large" overflow="hidden">
            <Carousel fill>
                <Project></Project>
            </Carousel>
        </Box>
    )
}


export default Portfolio