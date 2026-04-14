import { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime(prev => prev - 1); 
      }, 1000);
    }

  
    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleStart = () => {
    setTime(input);      
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(input);   
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label>Set Time (seconds): </label>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <h3>Time left: {time}</h3>

      <button disabled={isRunning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;