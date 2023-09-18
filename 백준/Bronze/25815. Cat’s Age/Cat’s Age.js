const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let month = input[0] * 12 + input[1]
let human = 0

if(month <= 12){
    human += month * 15
}
else if(month <= 24){
    human += month * 9 + 72
}
else{
    human += month * 4 + 192
}

console.log(Math.floor(human/12), human%12)