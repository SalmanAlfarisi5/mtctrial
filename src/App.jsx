import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Teams from './Components/Teams/Teams';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WhatsappWidget from './Components/WhatsappWidget/WhatsappWidget';
import ChatbotWidget from './Components/ChatbotWidget/ChatbotWidget';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
      {/* Chatbot and Whatsapp Widget displayed globally */}
      <ChatbotWidget />
      <WhatsappWidget />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/programs"
          element={
            <>
              <Title subTitle="Our programs" title="What we offer" />
              <Programs />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/clients"
          element={
            <>
              <Title subTitle="Clients" title="Companies that Choose Us" />
              <Clients />
            </>
          }
        />
        <Route
          path="/teams"
          element={
            <>
              <Title subTitle="" title="Our Teams" />
              <Teams />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Title subTitle="Contact Us" title="Get in Touch" />
              <Contact />
            </>
          }
        />
      </Routes>
      {/* Footer displayed on every page except the landing page */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

export default App;
