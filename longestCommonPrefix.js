/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix0 = function (strs) {
  let pfix = strs[0];
  let s, i, j;
  for (i = 1; i < strs.length && pfix !== ""; i++) {
    s = strs[i];
    for (j = 0; j < s.length && j < pfix.length && s[j] === pfix[j]; j++);
    pfix = pfix.substring(0, j);
  }
  return pfix;
};

//faster
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return prefix;
    }
  }
  return prefix;
};

console.log("test", longestCommonPrefix(["flower", "flower", "flower"]));
console.log("test", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("test", longestCommonPrefix(["dog", "racecar", "car"]));
