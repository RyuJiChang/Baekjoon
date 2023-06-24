const [a, b, limit] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const result = []

for(let i = 1 ; i <= limit ; i++){
    if(i % a === 0 && i % b === 0){
        result.push('FizzBuzz')
    }
    else if(i % a === 0){
        result.push('Fizz')
    }
    else if(i % b === 0){
        result.push('Buzz')
    }
    else{
        result.push(i)
    }
}

console.log(result.join('\n'))