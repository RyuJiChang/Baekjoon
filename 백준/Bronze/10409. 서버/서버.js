const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let time = input[0].split(' ').map(Number)[1]
let done = 0
const task = input[1].split(' ').map(Number)

for(let i = 0 ; i < task.length ; i++){
    if(time >= task[i]){
        time -= task[i]
        done++
    }
    else{
        break
    }
}

console.log(done)