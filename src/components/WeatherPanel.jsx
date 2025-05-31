
import "../styles/weatherpanel.css";

const WeatherPanel = ({ weatherData, isVisible }) => {
  if (!weatherData) return null;

  return (
    <div className={`weather-panel ${isVisible ? "fade-in" : "fade-out"}`}>
      <h3>{weatherData.name}</h3>
      <p>{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
      <p>{weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherPanel;
