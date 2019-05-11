// TYPE: Debugging Question
//
// PROMPT:
// Write a function:
//
// const challenge(nums) that, given an array nums of N integers, returns the smallest positive integer (greater than 0) that does not occur in nums.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
//
// TODO:
// fix the function below to pass the tests
// without adding new lines of code
// or removing lines of code
// run grunt test to check
//
// EXAMPLE FUNCTION INVOCATION AND RETURN VALUE:
// challenge([1,2,3,5])
// returns =>
// 4

const challenge = nums => {
  const maxNum = Math.max(...nums)

  if (maxNum < 0) return 1

  let sortedNums = nums

  sortedNums = sortedNums.filter((item, index) => nums.indexOf(item) === index)
  sortedNums = sortedNums.filter(num => num > 0)
  sortedNums = sortedNums.sort((a, b) => a - b)

  for (let x = 0; x < sortedNums.length; x++) {
    if (x + 1 !== sortedNums[x]) return x + 1
  }

  return maxNum + 1
}

module.exports = challenge
