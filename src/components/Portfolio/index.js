import React from 'react'
import Project from '../Project'

import './style.css'


function Portfolio() {
    return (
        <section>
            <div className="flex-row justify-space-between">
                <div className="portfolio-header-container">
                    <h2 id="portfolio" className="portfolio-heading">Portfolio</h2>
                </div>
            </div>
            <div className="flex-row justify-space-around project-container">
                {<Project></Project>}
            </div>
        </section>
    )
}


export default Portfolio