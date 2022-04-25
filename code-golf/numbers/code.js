//https://codegolf.stackexchange.com/questions/245778/numbers-in-2050
const {assert} = require("../assert")

f = (n, m = 10 ** (n.toString().length - 1), v = Math.trunc(n / m), words = [
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
  "",
  "ten",
  "hundred",
]) =>  n == 0?'':
       m == 1? words[v - 1]: 
    `${[v==1?'':words[v - 1], words[10+Math.log10(m)]].join('-')} ${f(n % m)}`

assert(f(56), "five-ten six")
assert(f(11), "ten one")
assert(f(72), "seven-ten two")
assert(f(478), "four-hundred seven-ten eight")
assert(f(754), "seven-hundred five-ten four")
assert(f(750), "seven-hundred five-ten")
assert(f(507), "five-hundred seven")