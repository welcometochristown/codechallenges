const assert = (value, expected) => {
  if (typeof value === "string") {
    value = value.trim()
    expected = expected.trim()
  }
  console.log(`Actual [${value}] => Expected [${expected}]`)

  if (value === expected) {
    console.log("pass")
    return
  }
  console.log("error")
}

module.exports = {
  assert,
}
