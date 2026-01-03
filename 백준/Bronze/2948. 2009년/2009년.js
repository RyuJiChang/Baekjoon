const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const date = new Date(2009, input[1] - 1, input[0])
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


console.log(days[date.getDay()])