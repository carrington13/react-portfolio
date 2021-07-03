import React, { useState } from "react"
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Resume from "./components/Resume"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>

            <About></About>
            <Resume></Resume>
            <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
