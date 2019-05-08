// the below function has at least one bug
// modify the code without adding or removing any additional lines
// the function is actually fizzbuzz is an over-engineered, overly complicated way
// run grunt test to check

const challenge = function (values, max) {
  const output = []
  for (let i = 0; i <= max; i++) {
    let value = ''
    values.forEach((item, index) => {
      if (i % values[index].number === 0) {
        value += values[index].word
      }
    })
    output.push(value || i)
  }

  return output
}

module.exports = challenge
