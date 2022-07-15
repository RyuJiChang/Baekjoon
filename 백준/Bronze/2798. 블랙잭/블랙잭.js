const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let num = input[0].split(' ').map(Number)[1]
let arr = input[1].split(' ').map(Number)
let result = []
for(let i = 0 ; i < arr.length-2 ; i++){
    for(let j = i+1 ; j < arr.length-1 ; j++){
        for(let k = j+1 ; k < arr.length ; k++){
            result.push(arr[i]+arr[j]+arr[k])
        }
    }
}

result.sort((a,b) => a-b)

for(let i = 0 ; i <result.length ; i++){
    if(i === result.length-1 && result[i] <= num){
        console.log(result[i])        
    }
    if(result[i] <= num && result[i+1] > num){
        console.log(result[i])
        break
    }
}