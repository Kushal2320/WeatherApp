import { useState } from 'react';
import { getWeatherFromAPI } from "./Weather";
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    const result = await getWeatherFromAPI(city);
    setWeather(result);
    setLoading(false);
  };

  return (
    <>
    <div className="app-container">
      <h1 className="app-title">🌦️ WeatherMap App by Kushal</h1>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />
        <button onClick={handleSearch} className="search-button">
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      <div className="weather-output">
        {weather && <pre>{weather}</pre>}
      </div>
    </div>
     <footer className="footer">
     © 2025 Weather App Made by Kushal with lots of ❤️
   </footer>
   </>
  );
}

export default App;