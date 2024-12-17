import { useState } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

export default function Counter({ exerciseName }) {
  const [counter, setCounter] = useState(0);

  const handleIncrementClick = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrementClick = () => {
    setCounter((counter) => counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h3>{exerciseName} : {counter}</h3>
      <button
        type="button"
        className="counter-btn"
        onClick={handleIncrementClick}
      >
        + 1
      </button>
      <button
        type="button"
        className="counter-btn"
        onClick={handleDecrementClick}
        disabled={counter < 1}
      >
        - 1
      </button>
      <button type="button" className="counter-btn" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

Counter.propTypes = {
  exerciseName: PropTypes.string.isRequired,
};
