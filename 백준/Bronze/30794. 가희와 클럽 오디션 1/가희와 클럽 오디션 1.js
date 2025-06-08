const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const map = {
    'miss' : 0,
    'bad' : 200,
    'cool' : 400,
    'great' : 600,
    'perfect' : 1000
}

console.log(map[input[1]] * input[0])