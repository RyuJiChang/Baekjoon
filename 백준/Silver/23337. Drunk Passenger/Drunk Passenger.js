let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [0,0,1]

for(let i = 3 ; i <= input ; i++){
    dp[i] = i/(2*i-2)
}

console.log(dp[input])