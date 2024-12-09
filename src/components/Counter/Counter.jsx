import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <p className="counter-res">{counter}</p>
      <button type="button" className="counter-btn" onClick={handleClick}>
        Click
      </button>
    </>
  );
}
