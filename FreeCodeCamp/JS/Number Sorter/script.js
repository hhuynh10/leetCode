const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  // const sortedValues = inputValues.sort((a, b) => {
  //   return a - b;
  // });
  const sortedValues = insertionSort(inputValues);

  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
  return arr;
};

sortButton.addEventListener("click", sortInputArray);
