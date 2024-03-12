import React, { useReducer } from "react";

const reducer = (count, action) => {
  switch (action.type) {
    case "DECREMENT":
      return count - 1;
    case "INCREMENT":
      return count + 1;
    case "RESET":
      return (count = 0);
    default:
      return count;
  }
};

const UseReducer = ({ initialVal = 0 }) => {
  const [count, dispatch] = useReducer(reducer, initialVal);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
