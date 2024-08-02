const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const map = {0 : 'zilch', 1 : 'double', 2 : 'double-double', 3 : 'triple-double'}
const results = []

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(Number)
    const result = []
    let count = 0
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] >= 10){
            count++
        }
    }
    result.push(arr.join(' '))
    result.push(map[count])
    results.push(result.join('\n'))
}

console.log(results.join('\n\n'))