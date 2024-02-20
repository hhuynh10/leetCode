import React, { useState } from "react";

const Test = () => {
  const [arr, setArr] = useState(["A", "B", "C"]);
  const [input, setInput] = useState("");

  const removeFirstEl = () => {
    setArr((currArr) => {
      return currArr.slice(1);
    });
  };

  const removeLetter = (letter) => {
    setArr((currArr) => {
      return currArr.filter((el) => el !== letter);
    });
  };

  const addStart = (letter) => {
    setArr((currArr) => {
      return [letter, ...currArr];
    });
  };

  const addEnd = (letter) => {
    setArr((currArr) => {
      return [...currArr, letter];
    });
  };

  const clear = () => {
    return setArr([]);
  };

  const reset = () => {
    return setArr(["A", "B", "C"]);
  };

  const update = (letter) => {
    setArr((currArr) => {
      return currArr.map((el) => {
        if (el == "A") {
          return "H";
        }
        return el;
      });
    });
  };

  const updateIndex = (input, index) => {
    setArr((currArr) => {
      return [...arr.slice(0, index), input, ...arr.slice(index)];
    });
  };

  return (
    <div>
      <button onClick={removeFirstEl}>removeFirstEl</button>
      <br />
      <br />
      <button onClick={() => removeLetter("B")}>removeLetter</button>
      <br />
      <br />
      <button onClick={() => addStart("H")}>addStart</button>
      <br />
      <br />
      <button onClick={() => addEnd("S")}>addStart</button>
      <br />
      <br />
      <button onClick={clear}>clear</button>
      <br />
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <br />
      <button onClick={() => update("A")}>update</button>
      <br />
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          addStart(input);
        }}
      >
        AddEl
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          updateIndex(input, 2);
        }}
      >
        updateIndex
      </button>
      <br />
      <br />

      {arr.join(", ")}
    </div>
  );
};

export default Test;
