import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Services from './component/Services';
import Gallery from './component/Gallery'

function App() {
  return (
     <div>
      <Header/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
     </div> 
 );
}

export default App;
