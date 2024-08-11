const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number);
const map = []
const range = [];
let isPossible = true

for (let i = 0; i < n; i++) {
    map.push(new Array(n).fill(false))
    map[i][i] = true;
}

for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ').map(Number)
    map[a-1][b-1] = true
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (map[j][i] && map[i][k]) {
                map[j][k] = true;
            }
        }
    }
}


for (let i = 0; i < n; i++) {
    let min = 1;
    let max = n;

    for (let j = 0; j < n; j++) {
        if (i !== j) {
            if (map[i][j]) {
                max--;
            }
            if (map[j][i]) {
                min++;
            }
        }
    }

    range.push(`${min} ${max}`);

    if (min > max) {
        isPossible = false
        break
    }
}

console.log(isPossible ? range.join('\n') : -1)