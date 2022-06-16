import { usedState, useState } from "react";
import "./App.scss";

function App() {
  const keys = [
    7,
    8,
    9,
    " * ",
    4,
    5,
    6,
    " + ",
    1,
    2,
    3,
    " - ",
    0,
    " / ",
    "=",
    "C",
  ];
  const [display, setDisplay] = useState("0");

  const type = (value) => {
    if (value === "C") {
      setDisplay("0");
      return;
    }
    if (value === "=") {
      setDisplay(eval(display));
      return;
    }
    if (display === "0") {
      setDisplay(value);
      return;
    }

    setDisplay(`${display}${value}`);
  };

  return (
    <div className="App">
      <div className="display">{display}</div>
      {keys.map((key) => (
        <button
          onClick={() => type(key)}
          className="key"
          key={`calc-key_${key}`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default App;
