//https://codegolf.stackexchange.com/questions/228953/create-an-ascii-line-given-a-length

f = (o) => {
  for (e = 0; e++ < o; ) console.log(" ".repeat(e) + "\\")
}
f(4)
