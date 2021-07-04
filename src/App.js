import React from 'react';
import { Grommet } from 'grommet'
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
//import About from './components/About'
function App() {
  return (
    <Grommet>
      <HeaderComp></HeaderComp>
      <FooterComp></FooterComp>
    </Grommet>


  );

}
export default App;
