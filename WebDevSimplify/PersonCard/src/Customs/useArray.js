import { useState } from "react";

export function useArray(INITIAL_ARRAY) {
  const [array, setArray] = useState(INITIAL_ARRAY);

  function set(array) {
    return setArray((currArray) => array);
  }

  function push(element) {
    setArray((currArray) => {
      return [...currArray, element];
    });
  }

  function replace(index, element) {
    setArray((currArray) => {
      return [
        ...currArray.slice(0, index),
        element,
        ...currArray.slice(index + 1),
      ];
    });
  }

  function filter() {}

  function remove(index) {
    setArray((currArray) => {
      return [...currArray.slice(0, index), ...currArray.slice(index + 1)];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_ARRAY);
  }

  return { array, set, push, replace, filter, remove, clear, reset };
}
