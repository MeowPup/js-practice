const conditionalSum = function(values, condition) {
  let num = 0;
  
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      num = num += values[i];
    }
  }
  for (let n = 0; n < values.length; n++) {
    if(values[n] % 2 === 1 && condition === "odd") {
      num = num += values[n];
    }
  }
  return num; 
  }
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));