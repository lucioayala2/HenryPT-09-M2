import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      const input = document.getElementById("cityInput");
      onSearch(input.value);
      input.value= "";
      }}>
    <input id="cityInput" type="text" placeholder='Ciudad...' />
    <input type="submit" value='Agregar' />
  </form>
  )
};