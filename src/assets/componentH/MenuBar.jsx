import React, { useState, useEffect } from 'react';
import './MenuBar.css';
import logo from '../imgH/logoBiker.png';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`menu-bar ${isScrollingDown ? 'fixed' : 'static'}`}>
      <div className="menu-bar-inner">
        <div className="menu-logo">
          <a href="...">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="menu-list">
            <li><a href="#home" className="active">Inicio</a></li>
            <li><a href="#services">Servicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
