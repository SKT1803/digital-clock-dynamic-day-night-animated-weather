// components/Moon.jsx
import React from "react";
import "../styles/moon.css";

function Moon({ hour, moonlightBlend }) { // Now receiving the correct moonlightBlend
  // If moon is barely visible based on its *own* blend, return null
  if (moonlightBlend < 0.01) return null; // Using 0.01 to make it fully disappear

  // --- Moon's Vertical Position (Arc Height) ---
  // To mirror the sun's path, we offset the hour by 12.
  const moonHourForSunPath = (hour + 12) % 24;

  // Use the sun's arc formula with the moon's offset hour.
  const tForArc = (moonHourForSunPath - 6) / 12;
  const arcHeightMoon = Math.sin(tForArc * Math.PI);

  const bottomMoon = -10 + arcHeightMoon * 80;


  // --- Moon's Horizontal Position ---
  let tForHorizontal = (moonHourForSunPath - 6) / 12;

  // Clamp tForHorizontal to be between 0 and 1 to keep moon within screen boundaries.
  tForHorizontal = Math.max(0, Math.min(1, tForHorizontal));

  const leftMoon = 5 + 90 * tForHorizontal; // 90 because 95% - 5% = 90%


  // --- Moon's Size, Glow, and Opacity ---
  // Apply a power function to the moonlightBlend for a non-linear fade,
  // making it brighter/larger faster at its peak and vanish properly.
  const easedMoonlightBlend = Math.pow(moonlightBlend, 1.5); // Use a power like 1.5 or 2 for shaping.

  // Scale and glow now directly depend on the eased moonlightBlend,
  // mimicking the sun's behavior.
  const scale = 0.6 + easedMoonlightBlend * 0.8; // Smaller at 0, bigger at 1.0
  const glow = 10 + easedMoonlightBlend * 50;   // Dims at 0, brightest at 1.0
  const opacity = easedMoonlightBlend;           // Fades out at 0, fully visible at 1.0


  return (
    <div
      className="moon"
      style={{
        left: `${leftMoon}%`,
        bottom: `${bottomMoon}vh`,
        width: `${80 * scale}px`, // Using 80px base as sun
        height: `${80 * scale}px`,
        opacity,
        boxShadow: `0 0 ${glow}px #e0e0e0, 0 0 ${glow * 1.2}px #f0f8ff`, // Bluish-white glow
      }}
    ></div>
  );
}

export default Moon;