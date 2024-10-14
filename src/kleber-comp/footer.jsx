import React from 'react';
import './footer.css'; // Cambié a minúscula
import bajajLogo from '../assets/img/bajaj logo.png';
import tvsLogo from '../assets/img/tvs logo.png';
import yamahaLogo from '../assets/img/yamaha logo.png';
import ktmLogo from '../assets/img/ktm logo.png';
import facebookLogo from '../assets/img/facebook logo.png';
import whatsappLogo from '../assets/img/whatsapp logo.png';
import instagramLogo from '../assets/img/instagram logo.png';

const Footer = () => {
  return (
    <div>
      {/* Contenedor que agrupa todo */}
      <div className="footer-wrapper">
        {/* Contenedor superior de los logos */}
        <div className="logos-container">
          <div className="white-container">
            <img src={bajajLogo} alt="Bajaj" />
            <img src={tvsLogo} alt="TVS" />
            <img src={yamahaLogo} alt="Yamaha" />
            <img src={ktmLogo} alt="KTM" />
          </div>
          <div className="green-container">
            <p className="highlight-text">
              "TU SEGURIDAD Y LA VIDA ÚTIL DE TU VEHÍCULO SON NUESTRA PRIORIDAD"
            </p>
            <button className="cta-button">CONTACTANOS</button>
          </div>
        </div>
      
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>INFORMACIÓN</h4>
              <p>
              "En MotoBiker, nuestra misión es brindar un servicio excepcional de reparación 
              y mantenimiento de motos.Tu seguridad y satisfacción son nuestra prioridad."
              </p>
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
            </div>
            <div className="footer-section">
              <h4>CONTACTANOS</h4>
              <p>Av. Gerardo Unger 1193-SMP-Lima</p>
              <p>wilmanchamorrochecalla@gmail.com</p>
              <p>Tel: 933726837</p>
            </div>
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
