let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)
let dp = {}

function recurtion (a,n) {
    if(n === 30n){
        return
    }

    if(a<1000000000n){
        dp[(a*10n) + 1n] = n
        dp[a*2n] = n
        recurtion((a*10n) + 1n , n+1)
        recurtion(a*2n , n+1)
    }
}
recurtion(input[0],2)

if(dp[input[1]] === undefined){
    console.log(-1)    
}
else{
    console.log(dp[input[1]])
}