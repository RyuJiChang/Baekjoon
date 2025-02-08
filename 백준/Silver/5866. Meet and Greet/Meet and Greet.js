const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [a, b] = input.shift().split(' ').map(Number)
const arr1 = []
const arr2 = []
let index = 0
let count = 0

for(let i = 0 ; i < input.length ; i++){
    const [num, way] = input[i].split(' ')
    if(i < a){
        arr1.push(...Array(Number(num)).fill(way == 'L' ? -1 : 1))
    }
    else{
        arr2.push(...Array(Number(num)).fill(way == 'L' ? 1 : -1))
    }
}

for(let i = 0 ; i < Math.max(arr1.length, arr2.length) ; i++){
    if(i < arr1.length){
        index += arr1[i]
    }
    if(i < arr2.length){
        index += arr2[i]
    }

    if(index == 0 && arr1[i] + arr2[i] != 0){
        count++
    }
}

console.log(count)