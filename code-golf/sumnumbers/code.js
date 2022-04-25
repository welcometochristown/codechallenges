//https://codegolf.stackexchange.com/questions/133109/sum-of-all-integers-from-1-to-n
const {assert} = require("../assert")

/*
In: 5
     1+2+3+4+5 = 15
Out: 15
*/

// prettier-ignore
f=a=>a?a+f(--a):0

assert(f(5), 15)
