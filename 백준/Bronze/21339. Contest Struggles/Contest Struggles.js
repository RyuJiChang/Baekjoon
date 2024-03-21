const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [total, solved] = input.shift()
const [avr, score] = input.pop()

const result = (total * avr - solved * score) / (total - solved)


console.log(result <= 100 && result >= 0 ? result : 'impossible')