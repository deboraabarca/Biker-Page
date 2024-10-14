// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SeccionServicios.css";
import icono from "../assets/icono.png";
import icono2 from "../assets/icono2.png";

const SeccionServicios = () => {
    return (
      <div className="servicios-container">
        <div className="servicio Servicio1">
          <div className="texto-container">
            <h3>SERVICIO DE REPARACIÓN COMPLETA</h3>
            <p>Diagnóstico y reparación de todos los problemas de tu moto, asegurando que esté siempre en óptimas condiciones.</p>
          </div>
          <img src={icono2} alt="Icono" className="servicio-icono2" />
        </div>

        <div className="servicio">
          <div className="texto-container">
            <h3>MANTENIMIENTO PREVENTIVO</h3>
            <p>Cuida tu moto con nuestros planes de mantenimiento preventivo, diseñados para prolongar la vida útil de tu vehículo.</p>
          </div>
          <img src={icono} alt="Icono" className="servicio-icono" />
        </div>


        <div className="servicio">
          <div className="texto-container">
            <h3 className="texto3">REPUESTOS Y ACCESORIOS</h3>
            <p>Variedad de repuestos y accesorios originales para mantener tu moto siempre en perfectas condiciones.</p>
          </div>
          <img src={icono2} alt="Icono" className="servicio-icono2" />
        </div>
      </div>
    );
};

export default SeccionServicios;
