import React from 'react'
import Project from '../Project'
import { Box } from 'grommet'

function Portfolio() {
    return (
        <Box height="large" width="large" overflow="hidden" align="center">
            {[<Project></Project>]}
        </Box>
    )
}


export default Portfolio