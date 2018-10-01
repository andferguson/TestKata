// function wrap(string, colNum) {

// }
const wrap = (line, maxLen) => {
  for (let i = 0; i < line.length; i++) {
    let currentLetter = line[i];
    if (currentLetter === " " && i < maxLen) {
      let firstPart = line.slice(0, i + 1);
      let secondPart = line.slice(i + 1, line.length);
      line = firstPart + "\n" + secondPart;
    }
  }
  return line;
};
module.exports = wrap;
