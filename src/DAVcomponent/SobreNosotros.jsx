import React from 'react';
import './SobreNosotros.css';
import checkIcon from "../assets/checkIcon.png";
import mecanicoImage from "../assets/mecanico.jpg";

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-container">
      <div className="imagen-container">
        <img
          src={mecanicoImage}
          alt="Imagen sobre nosotros"
          className="imagen-nosotros"
        />
      </div>
      <div className="texto-container2">
        <h2 className="titulo-sobre-nosotros">Conoce un poco más de nosotros</h2>
        <p className="parrafo-sobre-nosotros">
        Somos una empresa dedicada a la reparación y mantenimiento de motocicletas, comprometida con la calidad y el servicio personalizado. Contamos con un equipo de mecánicos expertos y apasionados por las motos, preparados para ofrecer soluciones rápidas, eficientes y a precios competitivos. Nos enorgullece brindar un servicio honesto y transparente, utilizando repuestos de alta calidad para asegurar el mejor rendimiento de tu moto. Nuestra misión es que disfrutes de un viaje seguro y sin preocupaciones, porque sabemos lo importante que es tu moto para ti. ¡Confía en nosotros y vuelve a la carretera con tranquilidad!
        </p>
        <h3 className="titulo-horarios">HORARIOS</h3>
        <div className="horarios-container">
          <ul className="lista-horarios">
            <li><img src={checkIcon} alt="Check" /> Lunes: 1PM - 3PM</li>
            <li><img src={checkIcon} alt="Check" /> Sábado: 10AM - 2PM</li>
            <li><img src={checkIcon} alt="Check" /> Domingo: 11AM - 4PM</li>
          </ul>
          <ul className="lista-horarios">
            <li><img src={checkIcon} alt="Check" /> Lunes: 1PM - 3PM</li>
            <li><img src={checkIcon} alt="Check" /> Martes: 10AM - 2PM</li>
            <li><img src={checkIcon} alt="Check" /> Miércoles: 11AM - 4PM</li>
          </ul>
        </div>
        <div className="palabras-finales">
          <div className="palabra">
            <h4>15 AÑOS</h4>
            <p>EXPERIENCIA</p>
          </div>
          <div className="palabra">
            <h4>25+</h4>
            <p>EQUIPO</p>
          </div>
          <div className="palabra">
            <h4>500+</h4>
            <p>TOTAL CLIENTES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
