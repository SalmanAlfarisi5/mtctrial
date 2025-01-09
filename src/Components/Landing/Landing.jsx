import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Clients from '../../Components/Clients/Clients';

const Landing = () => {
  return (
      <>
      <Hero/>
      <div id = "about">
        <About/>
      </div>
      <Clients/>
      </>
  );
};

export default Landing;
