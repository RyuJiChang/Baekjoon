const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let isRunning = false
let now
let time = 0

for(let i = 1 ; i < input.length ; i++){
    isRunning = !isRunning
    if(isRunning){
        now = input[i]
    }
    else{
        time += input[i] - now
        now = input[i]
    }
}
console.log(isRunning ? 'still running' : time)