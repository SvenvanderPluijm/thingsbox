import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Markets from './components/Markets';
import BusinessModel from './components/BusinessModel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <Services />
        <UseCases />
        <Markets />
        <BusinessModel />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
