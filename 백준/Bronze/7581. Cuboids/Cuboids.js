let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b,c,d] = input[i].split(' ').map(Number)
    if(a === 0) result.push([d/b/c,b,c,d].join(' '))
    else if(b === 0) result.push([a,d/a/c,c,d].join(' '))
    else if(c === 0) result.push([a,b,d/b/a,d].join(' '))
    else if(d === 0) result.push([a,b,c,a*b*c].join(' '))
}
console.log(result.join('\n'))