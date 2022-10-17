let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)

let arrs = []
for(let i = 0 ; i < input.length ; i++){
    arrs.push(input.slice(i+1,i+Number(input[i])+1))
    if(Number(input[i]) > 0){
        i = i+Number(input[i])
    }
}

for(let i = 0 ; i < arrs.length; i++){
    arrs[i] = arrs[i].reduce((a,b) => a+b)
    if(arrs[i] > 0n){
        arrs[i] = '+'
    }
    else if(arrs[i] === 0n){
        arrs[i] = 0
    }
    else if(arrs[i] < 0n){
        arrs[i] = '-'
    }
}

console.log(arrs.join('\n'))