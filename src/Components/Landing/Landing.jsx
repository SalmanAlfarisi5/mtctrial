import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Clients from '../../Components/Clients/Clients';
import Title from '../../Components/Title/Title';

const Landing = () => {
  return (
      <>
      <Hero/>
      <div id = "about">
        <About/>
      </div>
      <Title subTitle="Clients" title="Companies that Choose Us" />
      <Clients/>
      </>
  );
};

export default Landing;
