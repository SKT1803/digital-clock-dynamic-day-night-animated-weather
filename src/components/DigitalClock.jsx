// components/DigitalClock.jsx
import React from "react";
import "../styles/digitalclock.css"; // Import the specific CSS for the clock

function DigitalClock({ time }) { // Accept 'time' as a prop
    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format, '0' for midnight/noon becomes '12'
        hours = hours % 12 || 12; 

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;