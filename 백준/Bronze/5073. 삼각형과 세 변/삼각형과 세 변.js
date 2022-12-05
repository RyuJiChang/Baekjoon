let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b,c] = input[i].split(' ').map(Number).sort((a,b)=>(a-b))
    if(a+b <= c){
        result.push('Invalid')
    }
    else if(a === b && b === c){
        result.push('Equilateral')
    }
    else if(a === b || b === c || a === c){
        result.push('Isosceles')
    }
    else{
        result.push('Scalene')
    }
}
console.log(result.join('\n'))