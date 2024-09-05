import { useState } from 'react';
import { WTHR_URL, WTHR_KEY} from './api/api';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';

function App() {
  // Declaring all the variables to store the API data
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Event to handle the changes on the search bar
  const handleOnSearchChange = (searchQuery) => {
    // Depending on the values from the GEO API prepare the fetch's to use the weather API
    const [lat, lon] = searchQuery.value.split(" ");
    const currentWeatherFetch = fetch(`${WTHR_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WTHR_KEY}`)
    const forecastFetch = fetch(`${WTHR_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WTHR_KEY}`)
    // Using Promise.all to wait for both fetches to complete
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchQuery.label, ...weatherResponse });
        setForecast({ city: searchQuery.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  return (
    // Displaying all the child components inside a parent one
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;