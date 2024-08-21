const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

const result = new Array(input.length).fill(0)
const max = 1000000;
const index = Array(max + 1).fill(-1);

for(let i = 0 ; i < input.length ; i++){
    index[input[i]] = i
}

for (let i = 0; i < input.length; i++) {
    for (let j = input[i] * 2; j <= max; j += input[i]) {
        if (index[j] !== -1) {
            result[i]++
            result[index[j]]--
        }
    }
}

console.log(result.join(' '));