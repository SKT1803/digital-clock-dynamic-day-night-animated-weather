// components/FogEffect.jsx
import React from 'react';
import '../styles/fogeffect.css';

function FogEffect({ isActive = true, opacity = 1 }) {
  if (!isActive) return null;

  return (
    <div className="fogwrapper" style={{ opacity }}>
      <div id="foglayer_01" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01" />
        <div className="image02" />
      </div>
    </div>
  );
}

export default FogEffect;
