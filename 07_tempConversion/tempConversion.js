const convertToCelsius = function(degrees) {
  let ans = (degrees - 32) * 5 / 9;
  let res = ans.toFixed(1);
  let result = parseFloat(res);
  return result
};

const convertToFahrenheit = function(degrees) {
  let res = ((degrees * 9 / 5) + 32).toFixed(1)
  let result = parseFloat(res);
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
