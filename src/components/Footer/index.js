import React from 'react';
import { Footer, Anchor } from 'grommet'
import { Github, Linkedin, Facebook } from 'grommet-icons';
import './style.css';
import portrait from '../../assets/images/portrait/portrait-small.jpg'

function FooterComp() {
    return (
        <Footer className="footer flex-row justify-space-evenly">
            <div className="portrait-container flex-row">
                <img alt="Casey Arrington" className="portrait" src={portrait} />
            </div>
            <div className="flex-row">
                <Anchor color="white" href="https://github.com/carrington13" icon={<Github size="large" />} target="_blank" />
                <Anchor color="white" href="https://www.linkedin.com/in/casey-arrington-67679a203/" icon={<Linkedin size="large"/>} target="_blank" />
                <Anchor color="white" href="https://www.facebook.com/casey.arrington.73" icon={<Facebook size="large"/>} target="_blank"/>            
            </div>
            <div className="footer-copy-div">&copy;2021 by Casey Arrington</div>
        </Footer>
    )
}

export default FooterComp