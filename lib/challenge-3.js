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
// 42

const challenge = monthlyPaycheck => {
  const OWED_TO_FRIEND = 500
  const BONUS_PERCENT = 0.1
  const STARTING_MONTH = 7
  let inTheBank = 0
  let ytd = 0
  let monthCount = 1

  while ((inTheBank - OWED_TO_FRIEND) < 5000) {
    inTheBank += monthlyPaycheck

    ytd += monthlyPaycheck
    if ((monthCount + STARTING_MONTH) % 12 === 0) {
      console.log('monthCount at BONUS:', monthCount + 1)
      inTheBank += ytd * BONUS_PERCENT
      ytd = 0
    }
    console.log('monthCount:', monthCount + 1, 'inTheBank:', inTheBank)

    monthlyPaycheck = monthlyPaycheck * 1.01
    monthCount++
  }

  return monthCount
}

module.exports = challenge
