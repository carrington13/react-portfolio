import React from 'react';
import { Grommet } from 'grommet'
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
//import About from './components/About'
function App() {
  return (
    <Grommet>
      <HeaderComp></HeaderComp>
      <About></About>
      <Contact></Contact>
      <FooterComp></FooterComp>
    </Grommet>


  );

}
export default App;
