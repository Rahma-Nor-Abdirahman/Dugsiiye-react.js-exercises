import React, { useReducer } from "react";
import { doubleCounterReducer, initialState } from "./doubleCounterReducer";

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(doubleCounterReducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Double Counter</h2>

      {/* Counter A */}
      <div>
        <h3>Counter A: {state.counterA}</h3>
        <button onClick={() => dispatch({ type: "DECREMENT_A" })}>
          - A
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
          + A
        </button>
      </div>

      <br />

      {/* Counter B */}
      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
          - B
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
          + B
        </button>
      </div>

      <br />

      {/* Reset */}
      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset All
      </button>
    </div>
  );
};

export default DoubleCounter;