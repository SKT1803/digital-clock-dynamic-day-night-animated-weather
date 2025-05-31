// hooks/useWeather.js
import { useState, useEffect } from "react";

const API_KEY = "42de6c5a5b0d8fa2a4b67ac4448d8965";

export default function useWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); // 10 minutes

    return () => clearInterval(interval);
  }, [city]);

  return { weatherData, error };
}
