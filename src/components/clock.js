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
            <div className="clock-col">
            <p className="clock-hours clock-timer">
            {date.getHours()}
            </p>
            </div>
            <div className="clock-col">
            <p className="clock-minutes clock-timer">
            {date.getMinutes()}
            </p>
            </div>
            <div className="clock-col">
            <p className="clock-seconds clock-timer">
            {date.getSeconds()}
            </p>
            </div>
        </div>

      );
}

export default Clock;
