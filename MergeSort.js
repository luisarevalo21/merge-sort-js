const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);

  const leftArray = array.slice(0, middle);
  const rightArrray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArrray));
};

const merge = (left, right) => {
  console.log("left", left);
  console.log("right", right);
  const mergedArray = [];
  let leftIndex = 0;

  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }
  return mergedArray;
};

console.log(mergeSort([6, 5, 4, 3, 2]));
