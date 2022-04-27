//recursive predicate function
f = (a) => a.reduceRight((g = (p, c, i) => (c ? p + c + g(p, --c) : 0)))

console.log(f([1, 2, 3]))
