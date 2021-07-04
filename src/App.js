import React, { useState } from 'react';
import { Grommet } from 'grommet';
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact';

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case "Portfolio":
        return <Portfolio/>;
      case "Resume": 
        return <Resume/>;
      case "Contact":
        return <Contact />;
      default: 
        return <About />
    }
  }
  return ( 
    <Grommet>
      <HeaderComp
        currentPage={currentPage}
        handlePageChange={handlePageChange} 
      />
      <main>
      {
      renderPage()
      }
      </main>
      <FooterComp />
    </Grommet>


  );

}
export default App;
