let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    let num = 1
    for(let j = 0 ; j < b ; j++){
        num = (num *a)%10
    }
    if(num === 0){
        result.push(10)
    }
    else{
        result.push(num)
    }
}

console.log(result.join('\n'))