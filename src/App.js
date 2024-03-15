import "./styles.css";
import React, { useState } from "react";
import Keypad from "./keypad.js"; // Importing keypad.js here

const App = () => {
  let [input, setInput] = useState("56");
  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    try {
      const result = eval(input); // Using eval for simplicity, but be cautious about security risks
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  }
  function handleClear() {
    setInput("");
  }
  return (
    <div className="container">
      <h1>Calculator App using react</h1>
      <div className="calculator">
        <input type="text" className="output" value={input} />
      </div>
      <Keypad
        handleClick={handleClick}
        handleClear={handleClear}
        calculate={calculate}
      />
    </div>
  );
};

export default App;
