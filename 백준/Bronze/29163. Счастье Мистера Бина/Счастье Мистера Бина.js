const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i]%2){
        count--
    }
    else{
        count++
    }
}

console.log(count > 0 ? 'Happy' : 'Sad')