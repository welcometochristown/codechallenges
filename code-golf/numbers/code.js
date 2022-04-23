//https://codegolf.stackexchange.com/questions/245778/numbers-in-2050
const assert = require("assert")

f = (n) => {
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ]
  const multiples = ["", "ten", "hundred"]
  const s = n.toString()
  const m = 10 ** (s.length - 1) // check whether 1, 10 or 100
  const v = Math.trunc(n / m) //400 => 4
  const f = m.toString().length

  console.log({ m, v, f })

  if (m == 1) return words[v]
  return words[v - 1] + multiples[f - 1] + f(n % m)
}

console.log(f(56))
console.log(f(11))
console.log(f(72))
console.log(f(478))
console.log(f(754))
console.log(f(750))
console.log(f(507))

// assert(f(56), "five-ten six")
// assert(f(11), "ten one")
// assert(f(72), "seven-ten two")
// assert(f(478), "four-hundred seven-ten eight")
// assert(f(754), "seven-hundred five-ten four")
// assert(f(750), "seven-hundred five-ten")
// assert(f(507), "five-hundred seven")
