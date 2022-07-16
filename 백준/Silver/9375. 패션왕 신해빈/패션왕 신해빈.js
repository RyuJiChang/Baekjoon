const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let num = 1
let obj = {}
let result = 1
for( let i = 0 ; i < Number(input[0]) ; i++){
    for(let i = num+1 ; i <= num + Number(input[num]) ; i++){
        
        obj[input[i].split(' ')[1]] ? obj[input[i].split(' ')[1]] += 1 : obj[input[i].split(' ')[1]] = 1
    }
    for(let key in obj){
        result *= (1+obj[key])
    }
    console.log(result-1)
    result = 1
    obj = {}
    num += Number(input[num])+1
}