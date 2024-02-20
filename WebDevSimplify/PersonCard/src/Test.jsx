import React, { useState } from 'react'

const Test = () => {
  const [arr, setArr] = useState(["A", "B", "C"])

  const removeFirstEl = () => {
    setArr((currArr) => {
      return currArr.slice(1)
    })
  }

  const removeLetter = (letter) => {
    setArr((currArr) => {
      return currArr.filter((el) => el !== letter)
    })
  }

  return (
    <div>
      <button onClick={removeFirstEl}>removeFirstEl</button>
      <br/>
      <br/>
      <button onClick={() => removeLetter("B")}>removeLetter</button>
      <br/>
      <br/>
      {arr.join(", ")}
    </div>
  )
}

export default Test