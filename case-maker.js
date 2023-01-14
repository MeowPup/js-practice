const camelCase = function(input) {
  
  let n = input.length;

  let str = "";

  for (let i = 0; i < n; i++) {
    // check for spaces
    if (input[i] == " ") {
      str += input[i+1].toUpperCase();
      i++;
    } else {
      str += input[i];
    }
  }
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));