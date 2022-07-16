const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input.slice(1,Number(input[0].split(' ')[0])+1)
let arrFind = input.slice(Number(input[0].split(' ')[0])+1)
let obj = {}

for(let i = 0 ; i < arr.length ; i++){
    obj[arr[i]] = i+1
}

for(let i = 0 ; i < arrFind.length ; i++){
    if(!isNaN(Number(arrFind[i]))){
        console.log(arr[Number(arrFind[i])-1])
    }
    else{
        console.log(obj[arrFind[i]])
    }
}
