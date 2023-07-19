/*
Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations 
for the given input.
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const combinations = [[]];
  for(let i=0; i < candidates.length; i++) {}
};

var combinationSum = function(candidates, target) {
  const combinations = [[]];
  for(let i=0; i < candidates.length; i++) {
    if(target / candidates[i] === ) {
      const sum = [];
      for(let j=0; j < target / candidates[i]; j++) {
        sum.push(candidates[i]);
      }
      combinations.push(sum);
    }
    for(let j=i+1; j<candidates.length; j++) {
      
    }
  }
  return combinations;
};

console.log(combinationSum([2,3,5], 8), [[2,2,3],[7]])