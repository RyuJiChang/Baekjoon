const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [y, m, d] = input[0].split('-').map(Number)
const sum = y*360 + (m - 1) * 30 + d - 1 + Number(input[1])

const year = Math.floor(sum / 360)
const month = Math.floor((sum % 360) / 30) + 1
const day = (sum % 360) % 30 + 1

console.log([year, String(month).padStart(2,'0'), String(day).padStart(2,'0')].join('-'))