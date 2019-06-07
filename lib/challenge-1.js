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

function challenge (A) {
  const maxNum = Math.max(...A)

  if (maxNum < 0) return 1

  let sortedNums = A

  sortedNums = sortedNums.filter((item, index) => A.indexOf(item) === index)
  sortedNums = sortedNums.filter(num => num > 0)
  sortedNums = sortedNums.sort((a, b) => a - b)

  for (let x = 1; x <= sortedNums.length; x++) {
    if (x !== sortedNums[x - 1]) return x
  }

  return maxNum + 1
}

module.exports = challenge

// A better, O(n) solution:
// --------------------------------------
//
// function challenge (A) {
//   const maxNum = Math.max(...A)
//   if (maxNum < 0) return 1
//
//   const orderedNums = []
//
//   for (let i = 0; i < A.length; i++) {
//     if ((A[i] - 1) >= 0) orderedNums[A[i] - 1] = true
//   }
//   orderedNums.push(undefined)
//   for (let i = 0; i < orderedNums.length; i++) {
//     if (orderedNums[i] === undefined) return i + 1
//   }
// }
