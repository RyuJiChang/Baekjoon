const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

const list = [
'Never gonna give you up',
'Never gonna let you down',
'Never gonna run around and desert you',
'Never gonna make you cry',
'Never gonna say goodbye',
'Never gonna tell a lie and hurt you',
'Never gonna stop'
]

console.log(input.length == input.filter(el => list.includes(el)).length ? 'No' : 'Yes')