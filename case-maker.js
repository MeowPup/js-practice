const camelCase = function(input) {
  
  let n = input.length;

  let str = "";

  for (let i = 0; i < n; i++) {
    // check for spaces
    if (input[i] == " ") {
      // convert to upper case
      str += input[i+1].toUpperCase();
      i++;
    } else {
      //if no space, copy character
      str += input[i];
    }
  }
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));