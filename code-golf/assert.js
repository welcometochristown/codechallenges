export const assert = (value, expected) => {
  if (value === expected) {
    console.log("pass")
    return
  }
  throw "error"
}
