import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarruselLogo.css';
import logo1 from '../imgH/BMW logo.png';
import logo2 from '../imgH/ducati logo.png';
import logo3 from '../imgH/honda logo.png';
import logo4 from '../imgH/kwasaki logo.png';
import logo5 from '../imgH/suzuki logo.png';
import logo6 from '../imgH/yamaha logo.png';

const CarouselLogo = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
    const [visibleLogos, setVisibleLogos] = useState(6);

    
    const updateVisibleLogos = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1200) {
            setVisibleLogos(6); 
        } else if (screenWidth >= 768) {
            setVisibleLogos(4); 
        } else {
            setVisibleLogos(3); 
        }
    };

    useEffect(() => {
        updateVisibleLogos(); 
        window.addEventListener('resize', updateVisibleLogos); 
        return () => window.removeEventListener('resize', updateVisibleLogos); 
    }, []);

    return (
        <Carousel controls={true} indicators={false} interval={2000} pause={false} className="carousel-wrapper">
            {Array(Math.ceil(logos.length / visibleLogos)).fill().map((_, i) => (
                <Carousel.Item key={i}>
                    <div className="logo-container">
                        {logos.slice(i * visibleLogos, i * visibleLogos + visibleLogos).map((logo, index) => (
                            <div key={index} className="logo-item">
                                <img
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    className="carousel-logo"
                                />
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselLogo;