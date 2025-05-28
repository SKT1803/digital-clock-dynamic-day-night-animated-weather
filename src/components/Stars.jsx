import React, { useEffect, useState } from "react";
import "../styles/stars.css";

function Stars({ count = 80, opacity = 1 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, [count]);

  return (
    <div className="stars-layer" style={{ opacity }}>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Stars;
