import React from 'react'
import Project from '../Project'

import './style.css'


function Portfolio() {
    return (
        <div className="flex-row justify-space-around project-container">
            {<Project></Project>}
        </div>
    )
}


export default Portfolio