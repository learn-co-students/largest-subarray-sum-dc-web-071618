function largestSubarraySum(arr) {
  let largestNumbers = [];

  while (largestNumbers.length < 3) {
    let highestNumber = getLargest(arr);
    largestNumbers.push(highestNumber);
  }

  return largestNumbers[0] + largestNumbers[1] + largestNumbers[2];
}

function getLargest(arr) {
  let largest = arr[0];
  let largestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largestIndex = i;
    }
  }
  arr.splice(largestIndex, 1);
  return largest;
}
