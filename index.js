function largestSubarraySum(array) {
  let largestSum = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let n = 1; n < array.length - 1; n++) {
        let subArray = array.slice(i, j);
        let sum = sumArray(subArray);
        if (sum > largestSum) {
          largestSum = sum;
        }
      }
    }
  }
  return largestSum;
}

function sumArray(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}
