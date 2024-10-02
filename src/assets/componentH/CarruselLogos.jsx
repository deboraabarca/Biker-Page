import React from 'react';
import './CarruselLogo.css';
import logo1 from '../imgH/BMW logo.png'; 
import logo2 from '../imgH/ducati logo.png';
import logo3 from '../imgH/honda logo.png';
import logo4 from '../imgH/kwasaki logo.png';
import logo5 from '../imgH/suzuki logo.png';
import logo6 from '../imgH/yamaha logo.png';

const CarouselLogo = () => {
    return (
        <div className="carousel-container">
            <img src={logo1} alt="Suzuki" className="carousel-logo" />
            <img src={logo2} alt="Ford" className="carousel-logo" />
            <img src={logo3} alt="Chevrolet" className="carousel-logo" />
            <img src={logo4} alt="Honda" className="carousel-logo" />
            <img src={logo5} alt="Yamaha" className="carousel-logo" />
            <img src={logo6} alt="Honda" className="carousel-logo" />
        </div>
    );
};

export default CarouselLogo;
