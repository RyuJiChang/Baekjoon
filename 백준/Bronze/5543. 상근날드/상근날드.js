const [bugerA, bugerB, bugerC, berverA, berverB] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(Math.min(bugerA, bugerB, bugerC) +  Math.min(berverA, berverB) - 50)
