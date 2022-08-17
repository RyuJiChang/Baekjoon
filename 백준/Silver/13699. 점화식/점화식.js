const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [1n,1n]

for(let i = 2 ; i <= input ; i++){
    let adding = 0n
    for(let j = 0 ; j < i ; j++){
        adding += dp[j]*dp[i-1-j]
    }
    dp[i] = adding
}

console.log(String(dp[input]))