import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [state, setCities] = React.useState([]);

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
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
          const exist = state.find((c) => c.id === ciudad.id);
          if (!exist){
            setCities((oldCities) => { 
              return [...oldCities, ciudad];
            });
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }


  return (
    <div className="App">
      <div>
      <SearchBar
          onSearch={(ciudad) => onSearch(ciudad)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={state} onClose={onClose}/>
      </div>
      <hr />
    </div>
  );
}

export default App;
