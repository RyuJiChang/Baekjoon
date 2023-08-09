const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [leg, head] = input[i].split(' ').map(Number)
    console.log(head * 2 - leg, leg - head)
}