import RainEffect from "./RainEffect";
import SnowEffect from "./SnowEffect";
import CloudEffect from "./CloudEffect";
import FogEffect from "./FogEffect";

// (You can import SnowEffect, FogEffect, etc. later)

function WeatherEffects({ description, isNight, dimFactor }) {
  const desc = description.toLowerCase();

  //   const isRain = desc.includes("rain") || desc.includes("shower");
  //   const isSnow = desc.includes("snow");
  //   const isFog = desc.includes("mist") || desc.includes("fog");
  //   const isCloud = desc.includes("cloud");

  const lowerDesc = description.toLowerCase();

  const isClear = lowerDesc.includes("clear");
  const isCloud = lowerDesc.includes("cloud");
  const isRain =
    lowerDesc.includes("rain") ||
    lowerDesc.includes("drizzle") ||
    lowerDesc.includes("shower");
  const isSnow = lowerDesc.includes("snow");
  const isFog =
    lowerDesc.includes("mist") ||
    lowerDesc.includes("fog") ||
    lowerDesc.includes("haze") ||
    lowerDesc.includes("smoke") ||
    lowerDesc.includes("dust");

  const isThunder = lowerDesc.includes("thunderstorm");

  // Multiple effects can coexist

  return (
    <>
      <RainEffect
        isActive={isRain || isThunder}
        opacity={1 - dimFactor * 0.6}
      />
      <SnowEffect isActive={isSnow} opacity={1 - dimFactor * 0.8} />
      <CloudEffect
        isActive={isCloud || isThunder}
        opacity={1 - dimFactor * 0.4}
      />
      <FogEffect isActive={isFog} opacity={1 - dimFactor * 0.2} />
    </>
  );
}

export default WeatherEffects;
