/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  const translation = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let beforeValue = 0;
  let currentValue;
  for (let i = 0; i < s.length; i++) {
    currentValue = translation[s.charAt(i)];
    if (beforeValue < currentValue) {
      beforeValue = currentValue - beforeValue;
    } else if (beforeValue > currentValue) {
      total += beforeValue;
      beforeValue = currentValue;
    } else {
      beforeValue += currentValue;
    }
  }
  total += beforeValue;

  return total;
};

console.log(romanToInt("III"));
