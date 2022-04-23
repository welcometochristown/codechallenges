//https://codegolf.stackexchange.com/questions/100613/convert-csv-to-table

const testData = `Name,Age,Gender
Shaun,19,Male
Debra,19,Female
Alan,26,Male
George,15,Male`

var rows = testData.split("\n").map((n) => n.split(","))
var lengths = rows.map((n) => n.map((x) => x.length))
var columns = Array(lengths[0].length)
  .fill()
  .map((_, columnIndex) => lengths.map((row, rowIndex) => row[columnIndex]))
  .map((n, column) => ({
    column,
    max: n.sort((a, b) => b - a)[0],
  }))

rows
  .map((n) => n.map((x, index) => x.padEnd(columns[index].max, " ")))
  .map((r, i) => `│${r.join("│")}│`)
  .forEach((r, i) => {
    if (i == 0) {
      console.log(
        `┌${Array(columns.length)
          .fill("")
          .map((n, index) => "".padEnd(columns[index].max, "─"))
          .join("┬")}┐\n${r}\n├${Array(columns.length)
          .fill("")
          .map((n, index) => "".padEnd(columns[index].max, "─"))
          .join("┼")}┤`
      )
    } else {
      console.log(r)
      if (i == rows.length - 1)
        console.log(
          `└${Array(columns.length)
            .fill("")
            .map((n, index) => "".padEnd(columns[index].max, "─"))
            .join("┴")}┘`
        )
    }
  })
