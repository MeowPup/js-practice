const sumLargestNumbers = function(data) {
  let largestNumberOne = 0;
  let largestNumberTwo = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumberOne && data[i] != largestNumberTwo) {
    largestNumberOne = data[i];
    }
   }
   for (let n = 0; n < data.length; n++) {
    if (data[n] > largestNumberTwo && data[n] != largestNumberOne) {
      largestNumberTwo = data[n];
    }
   }
   return largestNumberOne + largestNumberTwo;
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));