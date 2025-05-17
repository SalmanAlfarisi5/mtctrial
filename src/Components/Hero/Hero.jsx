import React from 'react';
import './Hero.css';
import { useLanguage } from '../../LanguageContext';

const Hero = () => {
  const { language } = useLanguage(); 

  return (
    <div className="Hero container">
      <div className="Hero-text">
        <h1>
          {language === "en"
            ? "Tax Consultation for your Businesses"
            : "Konsultasi Pajak untuk Bisnis Anda"}
        </h1>
        <a
          href="https://drive.google.com/file/d/1_7oyZuAySiUPN0ZS4ww6VYfpmhNDi9D8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {language === "en" ? "Explore more" : "Baca selengkapnya"}
        </a>
      </div>
    </div>
  );
};

export default Hero;