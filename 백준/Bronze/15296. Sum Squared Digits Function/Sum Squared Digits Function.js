const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const map = {
    '0' : 0,
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'a' : 10,
    'b' : 11,
    'c' : 12,
    'd' : 13,
    'e' : 14,
    'f' : 15,
}

for(let i = 1 ; i < input.length ; i++){
    const [k,b,n] = input[i]
    const digit = Number(n).toString(b)
    let sum = 0

    for(let j = 0 ; j < digit.length ; j++){
        sum += map[digit[j]] ** 2
    }

        
    console.log(`${k} ${sum}`)
}