import React from 'react';
import './MenuBar.css';
import logo from '../imgH/logoBiker.png';

const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="menu-bar-inner">
        <div className="menu-logo">
          <a href="...">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li><a href="#home" className="active">Inicio</a></li>
            <li><a href="#services">Servicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MenuBar;
