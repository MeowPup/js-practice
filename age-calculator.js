function ageCalculator(name, birthYear, currentYear){
  let age = currentYear - birthYear;
  return name + "is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));