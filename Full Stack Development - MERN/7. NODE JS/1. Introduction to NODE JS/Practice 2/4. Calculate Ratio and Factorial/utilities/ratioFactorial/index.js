const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  
  return { ratio, factorial };
};

// console.log(ratioAndFactorial(4,5,3));
module.exports = ratioAndFactorial;
