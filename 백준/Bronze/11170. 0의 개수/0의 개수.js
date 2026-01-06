const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i]
    let count = 0
    for(let j = x ; j <= y ; j++){
        count += String(j).split('0').length - 1
    }
    console.log(count)
}