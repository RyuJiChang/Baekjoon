const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
let x = (input[0] > (input[2]-input[0])) ? input[2]-input[0] : input[0];
let y = (input[1] > (input[3]-input[1])) ? input[3]-input[1] : input[1];
console.log((x>y) ? y : x)