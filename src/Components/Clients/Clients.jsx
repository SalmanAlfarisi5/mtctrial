import React from "react";
import "./Clients.css";
import clientsData from "../../data/client.json";

const Clients = () => {
  return (
    <div className="clients">
      <div className="gallery">
        {clientsData.map((client, index) => (
          <div className="client" key={index}>
            <img src={client.image} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
