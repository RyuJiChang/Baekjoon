const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let dp = new Array(b+1).fill(0)

for(let i = a+1 ; i <= b ; i++){
    if(a*2 <= i && i%2 === 0){
        dp[i] = Math.min(dp[i-1] +1 , dp[i/2] +1)
    }
    else{
        dp[i] = dp[i-1] +1
    }
}

console.log(dp[b])