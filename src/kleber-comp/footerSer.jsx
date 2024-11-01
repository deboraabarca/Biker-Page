import React from 'react';
import './footerSer.css'; // Importa el CSS en minúscula
import facebookLogo from '../assets/img/facebook logo.png';
import whatsappLogo from '../assets/img/whatsapp logo.png';
import instagramLogo from '../assets/img/instagram logo.png';
import mecanicoImage from '../assets/img/repuestomoto.png'; // Nueva imagen para la sección sobre nosotros
import checkIcon from '../assets/img/CheckIcon.png'; // Ícono de check

const Footer = () => {
  return (
    <div>
      {/* Nueva sección 'Sobre Nosotros' */}
      <div className="sobre-nosotros-container">
        <div className="imagen-container">
          <img
            src={mecanicoImage}
            alt="Imagen sobre nosotros"
            className="imagen-nosotros"
          />
        </div>
        <div className="texto-container2">
          <h2 className="titulo-repuestos">Repuesto y accesorios</h2>
          
            <ul className="lista-repuesto">
              <li><img src={checkIcon} alt="Check" /> Sistemas de frenos y embragues</li>
              <li><img src={checkIcon} alt="Check" /> Cadenas y transmisiones</li>
              <li><img src={checkIcon} alt="Check" /> Baterías y sistemas eléctricos</li>
              <li><img src={checkIcon} alt="Check" /> Amortiguadores y suspensiones</li>
              <li><img src={checkIcon} alt="Check" /> Accesorios de protección y confort</li>
            </ul>
          
        </div>
      </div>

      <br></br>

      {/* Footer existente */}
      <div className="footer-wrapper"> 
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>INFORMACIÓN</h4>
              <p>
                "En MotoBiker, nuestra misión es brindar un servicio excepcional de reparación 
                y mantenimiento de motos. Tu seguridad y satisfacción son nuestra prioridad."
              </p>
            </div>
            <div className="footer-section">
              <h4>CONTACTANOS</h4>
              <p>Av. Gerardo Unger 1193-SMP-Lima</p>
              <p>wilmanchamorrochecalla@gmail.com</p>
              <p>Tel: 933726837</p>
            </div>
          </div>
          
          {/* Redes sociales */}
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>

        
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Moto Biker. Todos los derechos reservados.{" "}
              <span className="footer-links">
                <a href="#">Disclaimer</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
