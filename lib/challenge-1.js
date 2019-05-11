// TYPE: Debugging Question
//
// PROMPT:
// Write a function that, given an array nums of N integers, returns the smallest positive integer (greater than 0) that does not occur in nums.
//
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

  if (maxNum < 0) return 0

  let sortedNums = nums

  sortedNums = sortedNums.filter((item, index) => nums.indexOf(item) === index)
  sortedNums = sortedNums.filter(num => num > 0)
  sortedNums = sortedNums.sort((a, b) => a - b)

  for (let x = 1; x < sortedNums.length; x++) {
    if (x + 1 !== sortedNums[x - 1]) return x + 1
  }

  return maxNum
}

module.exports = challenge
