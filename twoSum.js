/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum2 = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//       for(let j=i+1; j < nums.length; j++){
//         if(nums[i]+nums[j] === target){
//           return [i,j];
//         }
//       }
//     }
// };

var twoSum = function (nums, target){
  let hashTable= [];
  for(let i = 0; i < nums.length; i++){
    let match = target - nums[i];
    if(hashTable[match] != undefined)
      return [hashTable[match],i]
    hashTable[nums[i]] = i;
  }
}
console.log(twoSum([2,7,11,15], 9));

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/