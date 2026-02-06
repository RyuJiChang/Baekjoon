const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const char = 'abcdefghijklmnopqrstuvwxyz'.split('')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    let diff = []

    for(let k = 0 ; k < input[i][0].length ; k++){
        let a = char.indexOf(input[i][0][k])
        let b = char.indexOf(input[i][1][k])
        diff.push((b - a + 26) % 26)
    }

    let str = ''
    let target = input[i][input[i].length - 1]

    for(let j = 0 ; j < target.length ; j++){
        let idx = char.indexOf(target[j])
        str += char[(idx + diff[j]) % 26]
    }

    result.push(input[i].join(' ') + ' ' + str)
}

console.log(result.join('\n'))
