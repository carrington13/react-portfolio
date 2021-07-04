import React from 'react';
import { Footer, Anchor } from 'grommet'
import { Github, Linkedin, Facebook } from 'grommet-icons';

function FooterComp() {
    return (
        <Footer>
            <div>&copy;2021 by Casey Arrington</div>
            <div>
                <Anchor href="https://github.com/carrington13" icon={<Github />} target="_blank" />
                <Anchor href="https://www.linkedin.com/in/casey-arrington-67679a203/" icon={<Linkedin />} target="_blank" />
                <Anchor href="https://www.facebook.com/casey.arrington.73" icon={<Facebook />} target="_blank"/>            
            </div>
        </Footer>
    )
}

export default FooterComp