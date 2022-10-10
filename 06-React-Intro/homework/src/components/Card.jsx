import React from 'react';
import Temp from './Temp';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
  <div>
    <span>{name}</span>
    <button onClick={onClose}>X</button>
    <div>
      <Temp label='Min' value ={min} />
      <Temp label='Max' value ={max} />

      <img src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="icono" />
    </div>
  </div>
  )
};