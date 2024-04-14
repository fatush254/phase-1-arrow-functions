// Define a function expression called divide
const divide = function(dividend, divisor) {
    return dividend / divisor;
  };
  
  // Define an arrow function called square
  const square = x => x * x;
  
  // Define an arrow function called add
  const add = (x, y) => x + y;
  
  // Export the functions
  module.exports = {
    divide,
    square,
    add
  };