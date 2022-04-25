//https://codegolf.stackexchange.com/questions/246238/pair-my-brackets

/*
[In]: ()
[Out]: ()

[In]: (}{]
[Out]: (}, {]

[In]: ([{}])
[Out]: (), [], {}

[In]: {]([(}]{)}
[Out]: {], (}, [], (}, {)
*/

f = (
  a,
  g = (x, c = 0) =>
    !(c += 1 - /[([{]/.test(x[0]) * 2) ? x[0] : g(x.slice(1), c)
) =>
  [...a].map((n, i) => (/[([{]/.test(n) ? `${n}${g(a.slice(i))}` : "")).join("")

console.log("()", f("()"))
console.log("([])", f("([])"))
console.log("([{}])", f("([{}])"))
console.log("{]([(}]{)}", f("{]([(}]{)}"))
