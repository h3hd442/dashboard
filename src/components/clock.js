import React, { useState, useEffect } from 'react';


function Clock() {
    const [date, setDate] = useState(() => new Date());
    

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
      });

      return (
        <div className="clock-container">
            <span className="clock-col">
            <p className="clock-hours clock-timer">
            {date.getHours()}
            </p>
            </span>
            <span className="clock-col">
            <p className="clock-minutes clock-timer">
            {date.getMinutes()}
            </p>
            </span>
            <span className="clock-col">
            <p className="clock-seconds clock-timer">
            {date.getSeconds()}
            </p>
            </span>
        </div>

      );
}

export default Clock;
