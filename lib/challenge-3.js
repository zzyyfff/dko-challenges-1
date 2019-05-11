// TYPE: Long ass word problem with a simple question
//
// PROMPT:
// You're saving up to buy a $5000 car and you currently owe $500 to your friend.
// You make $ monthlyPaycheck per month and get a 1% raise every month after the first month.
// You also have a 10% of year to date total earnings bonus on at the end of the year.
// (if you have made $1000 by end of year, your bonus would be $100)
// It is currently the beginning of August. How long many months it take to have enough money to buy the car?
//
// TODO:
// make a function that takes a number
// and returns the number of months it takes to have enough money to buy the car
//
// EXAMPLE FUNCTION INVOCATION AND RETURN VALUE:
// challenge(100)
// returns =>
// 19

const challenge = monthlyPaycheck => {
  let currentBalance = -500
  let currentMonth = 8
  let yearToDateEarnings = 0
  let months = 0

  while (currentBalance < 5000) {
    currentBalance = currentBalance + monthlyPaycheck
    yearToDateEarnings = yearToDateEarnings + monthlyPaycheck
    monthlyPaycheck = monthlyPaycheck * 1.01
    if (currentMonth === 12) {
      currentBalance = currentBalance + (yearToDateEarnings * 0.1)
      yearToDateEarnings = 0
      currentMonth = 1
    }
    currentMonth++
    months++
  }
  return months
}

console.log(challenge(250))

module.exports = challenge
