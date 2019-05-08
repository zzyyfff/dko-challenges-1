// the below function has at least one bug
// modify the code without adding any additional lines

const challenge = function (values, max) {
  const out = []
  for (let i = 0; i <= max; i++) {
    let value = ''
    values.forEach((item, index) => {
      if (i % values[index].number === 0) {
        value += values[index].word
      }
    })
    out.push(value || i)
  }

  return out
}

module.exports = challenge
