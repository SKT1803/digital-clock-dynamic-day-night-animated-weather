import React from "react";
import "../styles/sun.css";

function Sun({ hour, blend }) {
  if (blend < 0.05) return null; // hidden when night

  const t = (hour - 6) / 12;
  const arcHeight = Math.sin(Math.PI * t); // 0 at 6am/6pm, 1 at noon
  // const left = 5 + 90 * t;

  const left = 5 + 96 * t;

  // const bottom = -15 + arcHeight * 100;

  const bottom = -10 + arcHeight * 80;


  // const scale = 0.6 + blend * 0.8;
  // const glow = 10 + blend * 50;
  // const opacity = blend;

const easedBlend = Math.pow(blend, 1.5);
const scale = 0.6 + easedBlend * 0.8;
const glow = 10 + easedBlend * 50;
const opacity = easedBlend;


  return (
    <div
      className="sun"
      style={{
        left: `${left}%`,
        bottom: `${bottom}vh`,
        width: `${80 * scale}px`,
        height: `${80 * scale}px`,
        opacity,
        boxShadow: `0 0 ${glow}px yellow, 0 0 ${glow * 1.5}px white`,
      }}
    ></div>
  );
}

export default Sun;
