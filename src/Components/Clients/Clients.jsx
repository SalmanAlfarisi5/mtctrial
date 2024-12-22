import React from "react";
import "./Clients.css";

const clientsData = [
  {
    image: "/src/assets/photo-1.png",
    name: "Rekamitra Sukses Investama",
  },
  {
    image: "/src/assets/photo-2.png",
    name: "Rekamitra Cipta Tambang",
  },
  {
    image: "/src/assets/photo-3.png",
    name: "Prakasita Citra Buana",
  },
  {
    image: "/src/assets/photo-4.png",
    name: "Garsindo Engineering Equipment",
  },
  {
    image: "/src/assets/photo-5.png",
    name: "Amanah Tour",
  },
  {
    image: "/src/assets/photo-6.png",
    name: "CV. Rahmania Bagaskara Gemilang",
  },
  {
    image: "/src/assets/photo-7.png",
    name: "Arsolusi Consulting Group",
  },
  {
    image: "/src/assets/photo-8.png",
    name: "Cinta Puri Pratama",
  },
  {
    image: "/src/assets/photo-9.png",
    name: "PT. Transworld Solution",
  },
  {
    image: "/src/assets/photo-10.png",
    name: "Others",
  },
];

const Clients = () => {
  return (
    <div className="clients">
      <div className="gallery">
        {clientsData.map((client, index) => (
          <div className="client" key={index}>
            <img src={client.image} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
      <button className="btn dark-btn">See more here</button>
    </div>
  );
};

export default Clients;