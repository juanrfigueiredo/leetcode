/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let x1 = x.toString();
  let x2 = "";
  for (let i = x1.length; i >= 0; i--) x2 += x1.charAt(i);
  return x1 === x2;
};
var test = 2002002;
console.log(isPalindrome(test));

//faster
var isPalindrome2 = function (x) {
  if (x < 0) return false;
  let aux = x;
  let rev = 0;

  while (aux > 0) {
    rev = rev * 10 + (aux % 10);
    aux = Math.floor(aux / 10);
  }
  return x === rev;
};

console.log(isPalindrome2(test));

/*study, 3 ways to reverse a string*/

//reverse with built in functions
/**
 *
 * @param {string} s
 * @returns
 */
function reverseString1(s) {
  return s.split("").reverse().join("");
}

console.log(reverseString1("bom dia"));

//reverse with a decrementing loop
/**
 *
 * @param {string} s
 */
function reverseString2(s) {
  let newString = "";
  for (let i = s.length; i >= 0; i--) {
    newString += s.charAt(i);
  }
  return newString;
}

console.log(reverseString2("boa tarde"));

//reverse with recursion
/**
 *
 * @param {string} s
 */
function reverseString3(s) {
  if (s === "") return "";
  else return reverseString3(s.substring(1)) + s.charAt(0);
}

console.log(reverseString3("boa noite"));
