const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const dp = new Array(input+1).fill(5) 
dp[0] = 0
const poweredNum = []
const result = []
for(let i = 1 ; i <= Math.floor(Math.sqrt(input)) ; i++){
    poweredNum.push(i**2)
}

for(let i = 1 ; i <= input ; i++){
    for(let j = 0 ; j < Math.floor(Math.sqrt(i)) ; j++){
        dp[i] = Math.min(dp[i], dp[i-poweredNum[j]]+1)
    }
}

console.log(dp[input])