import React from 'react';
import Footer from './Components/Footer'
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
