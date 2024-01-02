const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let [a,b,c,q,w,e,r] = input[i].split('-').join('').split('')
    if(Math.abs((a.charCodeAt(0)-65)*26*26 + (b.charCodeAt(0)-65)*26 + c.charCodeAt(0)-65 - (q+w+e+r)) <= 100){
        result.push('nice')
    }
    else{
        result.push('not nice')
    }
}

console.log(result.join('\n'))