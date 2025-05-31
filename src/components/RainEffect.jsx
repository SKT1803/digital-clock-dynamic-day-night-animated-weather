// components/RainEffect.jsx
import React, { useEffect, useState } from 'react';
import '../styles/raineffect.css';

function RainEffect({ isActive, count = 100, opacity = 1 }) {
    const [raindrops, setRaindrops] = useState([]);

    useEffect(() => {
        if (isActive) {
            const generatedDrops = Array.from({ length: count }, (_, i) => ({
                id: i,
                left: Math.random() * 100, // % from left
                delay: Math.random() * 0.8, // Animation delay
                duration: 0.8 + Math.random() * 0.4 // Animation duration
            }));
            setRaindrops(generatedDrops);
        } else {
            setRaindrops([]);
        }
    }, [isActive, count]);

    return (
        <div className={`rain-container ${isActive ? 'active' : ''}`} 
        style={{ opacity }}>
            {raindrops.map(drop => (
                <div
                    key={drop.id}
                    className="raindrop"
                    style={{
                        left: `${drop.left}%`,
                        animationDelay: `${drop.delay}s`,
                        animationDuration: `${drop.duration}s`
                    }}
                />
            ))}
        </div>
    );
}

export default RainEffect;