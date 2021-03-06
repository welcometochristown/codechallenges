//https://codegolf.stackexchange.com/questions/246492/the-binary-eyes
const { assert } = require("../assert")

/*
1	1,0
3	101 (6),010 (2)
5	11011 (27),00100 (4)
7	1110111 (119),0001000 (8)
9	111101111 (495),000010000 (16)
*/

f = (n, b = (2 ** (n - 1)).toString(2).padStart(n + n - 1, "0")) =>
  !n ? "" : `${f(--n)}${[...b].map((i) => !0 - i).join("")},${b}\n`

assert(f(1), `0,1`)

assert(
  f(2),
  `0,1
101,010`
)

assert(
  f(3),
  `0,1
101,010
11011,00100`
)

assert(
  f(4),
  `0,1
101,010
11011,00100
1110111,0001000`
)

assert(
  f(5),
  `0,1
101,010
11011,00100
1110111,0001000
111101111,000010000`
)
