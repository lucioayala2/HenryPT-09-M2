import React from 'react'
import { useParams } from 'react-router-dom';

const apiKey = '7e2150963bd29c51f065a26805b4b643';

function Ciudad({ match }) {
  //const id = match.params.id; con Route 6 lo ponemos:
  const {id} = useParams();

  const [city, setCity] = React.useState(undefined);

  React.useEffect(() =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCity(ciudad);
      } else {
        setCity(null);
      }
    });
  }, [id]);

  return city === undefined ? (
     <h1>Cargando...</h1>)
      : city === null ? (
      <h1>Ciudad no encontrada</h1>) : ( 
    <div>
      <h2>{city.name}</h2>
      <div>
        <div>Temperatura: {city.temp}</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind}</div>
        <div>Nubosidad: {city.clouds}</div>
      </div>
    </div>
  )
}

export default Ciudad