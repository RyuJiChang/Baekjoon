let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arrA = []
let arrB = []
let result = []
for(let i = 0 ; i < 3 ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    arrA.push(a)
    arrB.push(b)
}
arrA.sort()
arrB.sort()

if(arrA[1] === arrA[0]){
    result.push(arrA[2])   
}
else{
    result.push(arrA[0])
}
if(arrB[1] === arrB[0]){
    result.push(arrB[2])   
}
else{
    result.push(arrB[0])   
}

console.log(result.join(' '))