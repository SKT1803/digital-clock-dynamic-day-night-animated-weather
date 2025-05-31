// components/SnowEffect.jsx
import React, { useEffect, useState } from 'react';
import '../styles/snoweffect.css';


const SNOW_CHARS = ['❄', '❅', '❆'];

function SnowEffect({ isActive, count = 80, opacity = 1 }) {
  const [flakes, setFlakes] = useState([]);
  const [textFlakes, setTextFlakes] = useState([]);

  useEffect(() => {
    if (isActive) {
      const generatedFlakes = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 5 + Math.random() * 10,
        delay: Math.random() * 1.5,
        duration: 3 + Math.random() * 2,
      }));

   // Text flakes
      const generatedTextFlakes = Array.from({ length: Math.floor(count / 2) }, (_, i) => ({
        id: `t${i}`,
        char: SNOW_CHARS[i % SNOW_CHARS.length],
        left: Math.random() * 100,
        fontSize: 14 + Math.random() * 28,
        delay: (Math.random() * 8).toFixed(2),
        shakeDelay: (Math.random() * 3).toFixed(2),
      }));


      setFlakes(generatedFlakes);
      setTextFlakes(generatedTextFlakes);
    } else {
      setFlakes([]);
      setTextFlakes([]);
    }
  }, [isActive, count]);

  return (
    <div className={`snow-container ${isActive ? 'active' : ''}`}
    style={{ opacity }} // Apply dynamic opacity here//
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        />
      ))}

    {/* Unicode Text Flakes */}
      {textFlakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake-text"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.fontSize}px`,
            animationDelay: `${flake.delay}s, ${flake.shakeDelay}s`,
          }}
        >
          {flake.char}
        </div>
      ))}


    </div>
  );
}

export default SnowEffect;
