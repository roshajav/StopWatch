import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const pauseStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div>
        <p>{seconds} seconds</p>
      </div>
      <div>
        {isRunning ? (
          <button onClick={pauseStopwatch} style={{ marginRight: "1rem" }}>
            Pause
          </button>
        ) : (
          <button onClick={startStopwatch} style={{ marginRight: "1rem" }}>
            Start
          </button>
        )}
        <button onClick={stopStopwatch} style={{ marginRight: "1rem" }}>
          Stop
        </button>
        <button onClick={resetStopwatch} style={{ marginRight: "1rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
