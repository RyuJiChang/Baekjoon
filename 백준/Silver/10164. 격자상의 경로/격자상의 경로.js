const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let dp = [1n,1n,2n]

for(let i = 3 ; i <= a+b ; i++){
    dp[i] = dp[i-1]*BigInt(i)
}
let d = Math.ceil(c/b)
let e =(c%b ? c%b : b)
    
let f = a-d+1
let g = b-e+1


if(!c){
    console.log(String(dp[a+b-2] / dp[a-1] / dp[b-1]))
}
else{
    console.log(String(dp[d+e-2] / dp[d-1] / dp[e-1] * dp[f+g-2] / dp[f-1] / dp[g-1]))
}