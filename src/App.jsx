import React, { useState, useEffect } from "react";
import Stars from "./components/Stars";
import Sun from "./components/Sun";
import Moon from "./components/Moon";
import DigitalClock from "./components/DigitalClock"; // Import the DigitalClock component
import useWeather from "./hooks/useWeather"
import WeatherEffects from "./components/WeatherEffects";
import CityInput from "./components/CityInput";
import WeatherPanel from "./components/WeatherPanel";
import './styles/cityinput.css'; 

import "./styles/global.css";


function App() {
  const [virtualTime, setVirtualTime] = useState(new Date());
  const [speed, setSpeed] = useState(1);

  // const [city, setCity] = useState("Saint Pierre and Miquelon"); // Default city


const [cityInput, setCityInput] = useState("Ankara");
const [tempCity, setTempCity] = useState(null);
const [isPanelVisible, setIsPanelVisible] = useState(true);

const { weatherData, error } = useWeather(tempCity || cityInput);


const handleCitySubmit = (e) => {
  e.preventDefault();
  const submittedCity = e.target.city.value.trim();

  if (submittedCity) {
    setIsPanelVisible(false);
    setTimeout(() => {
      setTempCity(submittedCity);
    }, 300);
  }
};




useEffect(() => {
  if (tempCity && weatherData) {
    setCityInput(tempCity); 
    setTempCity(null);
    setTimeout(() => setIsPanelVisible(true), 100);
  }
}, [weatherData, tempCity]);





   useEffect(() => {
    if (!weatherData) return;

  // Get current UTC time
  const nowUTC = new Date(new Date().toUTCString().slice(0, -4)); // Ensures no local offset

  // Add API-provided timezone offset (in seconds)
  const offsetTime = new Date(nowUTC.getTime() + weatherData.timezone * 1000);

  setVirtualTime(offsetTime);
  }, [weatherData]);



  useEffect(() => {
    const interval = setInterval(() => {
      setVirtualTime((prev) => new Date(prev.getTime() + 1000 * speed));
    }, 1000);
    return () => clearInterval(interval);
  }, [speed]);


  

  const hour = virtualTime.getHours() + virtualTime.getMinutes() / 60;

  //  Sun's Blend: 0 at 6AM/6PM, 1 at 12PM (for Sun's visibility, size, glow)
  const daylightBlend = Math.max(0, Math.sin(((hour - 6) / 12) * Math.PI));

  //  Moon's Blend: 0 at 6AM/6PM, 1 at 00:00 (midnight) (for Moon's visibility, size, glow)
  const moonlightBlend = Math.max(0, Math.sin(((hour - 18) / 12) * Math.PI));

  // --- Background Blending & Stars ---
  const rawSkyDarkness = (Math.cos((hour / 12) * Math.PI) + 1) / 2;
  const easedSkyDarkness = Math.pow(rawSkyDarkness, 1.5);

  const nightBackgroundOpacity = easedSkyDarkness;
  const dayBackgroundOpacity = 1 - easedSkyDarkness;
  const starsOpacity = easedSkyDarkness;

  return (
    <div className="main-wrapper">

      
      {/* <CityInput cityInput={cityInput} setCityInput={setCityInput} error={error} /> */}

      <div className="weather-city-wrapper">
      <CityInput cityInput={cityInput} onSubmit={handleCitySubmit} error={error} />
      <WeatherPanel weatherData={weatherData} isVisible={isPanelVisible} />
     </div>

      <div className="background-layer night" style={{ opacity: nightBackgroundOpacity }}></div>
      <div className="background-layer day" style={{ opacity: dayBackgroundOpacity }}></div>

      <Stars opacity={starsOpacity} />
      <Sun hour={hour} blend={daylightBlend} />
      <Moon hour={hour} moonlightBlend={moonlightBlend} />

      {weatherData && (
          <WeatherEffects
            description={weatherData.weather[0].description}
            isNight={weatherData.weather[0].icon.includes("n")}
            dimFactor={easedSkyDarkness}
          />
        )}


      {/* Digital Clock Component - Centered and synced */}
      <DigitalClock time={virtualTime} /> {/* Pass the virtualTime to the clock */}

      <div className="controls">
        <label style={{ color: "white", fontSize: "1.2rem" }}>
          Speed:
          <select
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          >
            {[1, 2, 4, 8, 1000].map((s) => (
              <option key={s} value={s}>{s}x</option>
            ))}
          </select>
        </label>
      </div>

    </div>
  );
}

export default App;