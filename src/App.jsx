import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MenuBar from './assets/componentH/MenuBar';
import SliderP from './assets/componentH/slider';
import CarruselLogo from './assets/componentH/CarruselLogos';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <MenuBar />
    <SliderP />
    <CarruselLogo />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
    </>
  )
}

export default App
