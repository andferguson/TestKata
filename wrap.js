
// const wrap = (line, maxLen) => {
//   for (let i = 0; i < line.length; i++) {
//     let currentLetter = line[i];
//     if (currentLetter === " ") {
//       let firstPart = line.slice(0, i + 1);
//       let secondPart = line.slice(i + 1, line.length);

//       line = firstPart + "\n" + secondPart;
//     }
//   }
//   return line;
// };

const wrap = (line, maxLen) => {
  const arr = line.split(' ');
  let ans = [];
  let singleLine = arr[0];

  for(let i = 1; i < arr.length; i++ ) {
    if((singleLine + arr[i] + " ").length > maxLen) {
      ans.push(singleLine);
      singleLine = "";
    } else {
      singleLine += arr[i] + " ";
    }
  }

  return ans.join(' \n');
}

module.exports = wrap;
