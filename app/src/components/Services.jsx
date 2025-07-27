import React from "react";
import {
  BsLightningChargeFill,
  BsHouseFill,
  BsTools,
  BsBuilding,
  BsGearFill,
  BsSun,
  BsPlugFill,
  BsCpuFill,
  BsFillDiagram3Fill,
  BsGlobe2,
  BsShieldShaded,
  BsCameraVideoFill,
  BsFire
} from "react-icons/bs";

function Services() {
  const services = [
    {
      icon: <BsHouseFill size={40} color="#0d6efd" />,
      title: "Home Wiring & Fittings "
    },
    {
      icon: <BsBuilding size={40} color="#fd7e14" />,
      title: "Industrial Electrical Work"
    },
    {
      icon: <BsTools size={40} color="#198754" />,
      title: "Maintenance & Repairing"
    },
    {
      icon: <BsGearFill size={40} color="#6f42c1" />,
      title: "Meter & Panel Setup"
    },
    {
      icon: <BsSun size={40} color="#ffc107" />,
      title: "Solar Panel Installation"
    },
    {
      icon: <BsLightningChargeFill size={40} color="#dc3545" />,
      title: "Govt. Tenders Projects"
    },
    {
      icon: <BsPlugFill size={40} color="#20c997" />,
      title: "Transformer Installation"
    },
    {
      icon: <BsCpuFill size={40} color="#6610f2" />,
      title: "DG Setup (Diesel Generator)"
    },
    {
      icon: <BsFillDiagram3Fill size={40} color="#e83e8c" />,
      title: "LT ,HT Cable Work"
    },
    {
      icon: <BsShieldShaded size={40} color="#6c757d" />,
      title: "Earthing & Lightning Protection"
    },
    {
      icon: <BsCameraVideoFill size={40} color="#343a40" />,
      title: "CCTV & Security System Wiring"
    },
    {
      icon: <BsFire size={40} color="#d63384" />,
      title: "Fire Alarm & Safety System"
    },
    {
      icon: <BsGlobe2 size={40} color="#17a2b8" />,
      title: "All Round Electrical Work"
    }
  ];

  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center mb-5 fw-bold text-primary">⚡ Our Electrical Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow h-100 text-center p-4">
              <div className="mb-3">{service.icon}</div>
              <h5 className="fw-bold">{service.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
