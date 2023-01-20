const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


let counting = {J:0, O:0, I:0}
for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] === "J") counting["J"]++
    else if(input[1][i] === "O") counting["O"]++
    else counting["I"]++
}

console.log(`${"J".repeat(counting.J)}${"O".repeat(counting.O)}${"I".repeat(counting.I)}`)