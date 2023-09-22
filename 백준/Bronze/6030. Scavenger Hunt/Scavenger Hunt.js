const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const arr1 = []
const arr2 = []
const result = []

for(let i = 1 ; i <= a ; i++){
    if(a % i === 0){
        arr1.push(i)
    }
}

for(let i = 1 ; i <= b ; i++){
    if(b % i === 0){
        arr2.push(i)
    }
}

for(let i = 0 ; i < arr1.length ; i++){
    for(let j = 0 ; j < arr2.length ; j++){
        result.push(arr1[i] + ' ' + arr2[j])
    }
}

console.log(result.join('\n'))