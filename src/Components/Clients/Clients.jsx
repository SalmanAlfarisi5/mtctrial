import React from "react";
import "./Clients.css";
import { useLocation } from "react-router-dom";
import photo1 from "../../assets/photo-1.png";
import photo2 from "../../assets/photo-2.png";
import photo3 from "../../assets/photo-3.png";
import photo4 from "../../assets/photo-4.png";
import photo5 from "../../assets/photo-5.png";
import photo6 from "../../assets/photo-6.png";
import photo7 from "../../assets/photo-7.png";
import photo8 from "../../assets/photo-8.png";
import photo9 from "../../assets/photo-9.png";

const Clients = () => {
  const location = useLocation();
  const showDescription = location.pathname === "/clients";

  return (
    <div className="clients">
      <div className="gallery">
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo1} alt="Arsolusi Consulting Group" />
          {showDescription && <p className="company-name">Arsolusi Consulting Group</p>}
          {showDescription && <p className="company-description">
            Arsolusi Consulting Group is a consulting firm headquartered in Jakarta, Indonesia. Our company is managed by a dedicated and professional team of legal consultants with experience working across various industries and handling clients on both national and international scales.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo2} alt="Cinta Puri Pratama" />
          {showDescription && <p className="company-name">Cinta Puri Pratama</p>}
          {showDescription && <p className="company-description">
CV. Cinta Puri Pratama is a coal mining company based in South Kalimantan, Indonesia, specializing in the extraction and export of coal with GAR specifications between 3,800 to 4,000. The company operates under a Mining Business Permit (IUP) and primarily serves domestic and international markets, including exports to China.





</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo3} alt="Garsindo Engineering Equipment" />
          {showDescription && <p className="company-name">Garsindo Engineering Equipment</p>}
          {showDescription && <p className="company-description">Providing top-notch engineering solutions and equipment.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo4} alt="CV Rahmania" />
          {showDescription && <p className="company-name">CV Rahmania</p>}
          {showDescription && <p className="company-description">A leading consulting firm specializing in business solutions.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo5} alt="Nurul Amanah Sirindo" />
          {showDescription && <p className="company-name">Nurul Amanah Sirindo</p>}
          {showDescription && <p className="company-description">A reputable construction and property development company.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo6} alt="Praksita Citra Buana" />
          {showDescription && <p className="company-name">Prakasita Citra Buana</p>}
          {showDescription && <p className="company-description">Providing top-notch engineering solutions and equipment.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo7} alt="Rekamitra Cipta Tambang" />
          {showDescription && <p className="company-name">Rekamitra Cipta Tambang</p>}
          {showDescription && <p className="company-description">A leading consulting firm specializing in business solutions.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo8} alt="Rekamitra Sukses Investama" />
          {showDescription && <p className="company-name">Rekamitra Sukses Investama</p>}
          {showDescription && <p className="company-description">A reputable construction and property development company.</p>}
        </div>
        <div className={`client ${showDescription ? "client-page" : ""}`}>
          <img src={photo9} alt="Transworld Solution" />
          {showDescription && <p className="company-name">Transworld Solution</p>}
          {showDescription && <p className="company-description">Providing top-notch engineering solutions and equipment.</p>}
        </div>
      </div>
    </div>
  );
};

export default Clients;
