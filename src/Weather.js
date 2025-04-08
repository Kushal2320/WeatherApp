import axios from 'axios';
const API_KEY = '14aadb893e2b2d0ce358fb1639086a83'; 

export const getWeatherFromAPI = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const description = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    return `Weather in ${city}:
- ${description}
- Temperature: ${temp}°C (Feels like: ${feelsLike}°C)
- Humidity: ${humidity}%
- Wind Speed: ${wind} m/s`;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "City not found. Please enter a valid city name.";
    }
    console.error("Error fetching weather:", error);
    return "Error fetching weather data.";
  }
};