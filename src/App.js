import React, {useState} from 'react';
import './App.css';
import CounterMessage from "./Components/CounterMessage";
import TimeMessage from "./Components/TimeMessage";

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className="App">
      <div className={`container ${isMorning ? "day" : ""}`}>
        <TimeMessage time={isMorning} />
        <CounterMessage counter={count} />
        <button onClick={() => {
          setCount(++count)
        }}>Update Counter</button>
        &nbsp;
        <button onClick={() => {
          setMorning(!isMorning)
        }}>Update Time</button>
      </div>
    </div>
  );
}

export default App;
