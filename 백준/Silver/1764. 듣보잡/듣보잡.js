const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let num =input[0].split(' ').map(Number)
let hear = input.slice(1,1+num[0])
let see = input.slice(1+num[0])

let obj = {}
let result = []

for(let i = 0 ; i < hear.length ; i++){
    obj[hear[i]] = 1
}

for(let i = 0 ; i < see.length ; i++){
    if(obj[see[i]]){
        result.push(see[i])
    }
}
result.sort()
console.log(result.length)
for(let i = 0 ; i < result.length ; i++){
    console.log(result[i])
}