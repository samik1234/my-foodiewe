
import React from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import HeadlineCards from './components/HeadlineCards';
import Food from '../src/components/Food';
import Category from '../src/components/Category';
import Footer  from'../src/components/Footer';
import Contact from '../src/components/Contact';
function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        <Footer/>
        <Contact/>
    </div>
  );
}

export default App;