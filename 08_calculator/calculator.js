const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function() {
  let sum = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    sum += arguments[0][i];
  }
  return sum;
};

const multiply = function() {
  let product = 1;
  for (let i = 0; i < arguments[0].length; i++) {
    product *= arguments[0][i];
  }
  return product;
};

const power = function() {
  let power = 1;
  for (let i = 0; i < arguments[1]; i++) {
    power *= arguments[0];
  }
  return power;
};

const factorial = function() {
  let factorial = 1;
  for (let i = 1; i <= arguments[0]; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
