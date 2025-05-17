import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <Contact />
    </>
  );
}

export default Home;