const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const map = {'NLCS' : 'North London Collegiate School', 'BHA' : 'Branksome Hall Asia', 'KIS' : 'Korea International School', 'SJA' : 'St. Johnsbury Academy'}

console.log(map[input])