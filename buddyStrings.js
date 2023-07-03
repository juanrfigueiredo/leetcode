/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if(s === goal) return new Set(s).size < s.length;
  let diff = [];
  for(let i = 0; i < s.length; i++) if(s[i] !== goal[i]) diff.push(i);
  if(diff.length !== 2) return false;
  return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};

console.log(buddyStrings('12', '1234'), false)
console.log(buddyStrings('1234', '1234'), false)
console.log(buddyStrings('333', '333'), true)

console.log(buddyStrings('ab', 'ba'), true)
console.log(buddyStrings('ab', 'ab'), false)
console.log(buddyStrings('aa', 'aa'), true)
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'), true)

/* THIS CODE HAS THE FOLLOWING POSSIBLE SITUATIONS */
/*
  1. s and goal are the same string
    1.1 s and goal are the same string but have no repeating characters
      - return false
    1.1 s and goal are the same string and have repeating characters
      - return true
  2. s and goal are not the same string
    2.1 s and goal are not the same string and have different lengths
      - return false
    2.2 s and goal are not the same string and have the same length
      2.2.1 s and goal have 3 or more different characters
        - return false
      2.2.2 s and goal have 2 different characters
        - check if the characters are the same but in different positions
          - if true, return true
          - if false, return false
      2.2.3 s and goal have 1 different character
        - return false
*/
