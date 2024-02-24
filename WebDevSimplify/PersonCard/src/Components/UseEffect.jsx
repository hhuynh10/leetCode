import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("Hayden");
  const [age, setAge] = useState(0);

  const add = () => {
    if (age < 120) {
      return setAge((currAge) => currAge + 1);
    }
    return 120;
  };

  const subtract = () => {
    if (age > 0) {
      return setAge((currAge) => currAge - 1);
    }
    return 0;
  };

  useEffect(() => {
    document.title = name

    const timeOut = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return (() => {
      clearTimeout(timeOut)
    })
  }, [name])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={subtract}>-</button>
        {age}
        <button onClick={add}>+</button>
      </div>
      <p>
        My name is {name} and I am {age} years old!
      </p>
    </div>
  );
};

export default UseEffect;
