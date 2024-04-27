const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const checker = {0:2, 1:1, 2:2, 3:3, 4:4, 5:5, 6:4, 7:3}
console.log(checker[input%8])