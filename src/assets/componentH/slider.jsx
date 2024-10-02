import React from 'react';
import './slider.css';
import fondo from '../imgH/sliderInicio.png';

const SliderP = () => {
    return(
        <div className="slider">
            <img src={fondo} alt="Logo" className="slider-image" />
            <div className="slider-content">
                <h1 className="slider-title">Reparación y mantenimiento de motos, calidad garantizada.</h1>
                <p className="slider-subtitle">"Cuida tu moto con nuestros planes de mantenimiento."</p>
                <button className="slider-button">CONTACTANOS</button>
            </div>
        </div>
    );
};

export default SliderP;