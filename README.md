# 🌞🌜 Digital Clock with Dynamic Day/Night Animation

This is a digital clock web app that dynamically reflects the **sun** and **moon’s position** based on the real-time clock. The sky background shifts smoothly from **day to night**, with a glowing sun, fading stars, and moonlight. The speed of time can also be accelerated for demo purposes.

### 🔗 [Live Demo on Vercel](https://digital-clock-dynamic-day-night.vercel.app/)

---

## Features

- Real-time digital clock with 12-hour format
- Animated sun and moon follow a realistic arc path across the screen
- Night sky with twinkling stars
- Sky color dynamically changes based on time (day/night blending)
- Adjustable speed controls for faster time simulation
- Objects smoothly fade in/out using blend and easing techniques

---

## Technologies Used

- **React.js**
- **HTML & CSS (custom animations and responsive layout)**
- **Custom time-based rendering logic (no external date libraries)**

---

## 📂 Project Structure

---

## How It Works

- The `App.jsx` simulates **virtual time** and updates it every second (or faster depending on speed).
- The **sun and moon positions** are calculated using sine curves to simulate a semi-circular sky arc.
- The **blend values** fade the sun and moon smoothly in and out at appropriate times.
- The **stars** appear only at night and twinkle using CSS animations.
- The **digital clock** always shows the current simulated time in HH:MM:SS format.

---

## Setup & Development

```bash
  git clone https://github.com/YOUR_USERNAME/digital-clock-dynamic-day-night
  cd digital-clock-dynamic-day-night
  npm install
  npm run dev
```

## Preview



---
