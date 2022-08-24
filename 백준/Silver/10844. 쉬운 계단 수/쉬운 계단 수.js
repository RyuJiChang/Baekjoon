const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let now = [0n,1n,1n,1n,1n,1n,1n,1n,1n,1n]
let dp = [0n,1n,1n,1n,1n,1n,1n,1n,1n,1n]
let result = 0n
for(let i = 2 ; i <= input ; i++){
    for(let j = 0 ; j <= 9 ; j++){
        if(j === 0 && dp[j] > 0){
            dp[1] += now[0] * 1n
            dp[0] -= now[0] * 1n
        }
        else if(j === 9){
            dp[8] += now[j] * 1n
            dp[9] -= now[j] * 1n
        }
        else if(0 < j && j < 9 ){
            dp[j-1] += now[j] * 1n
            dp[j] -= now[j] * 1n
            dp[j+1] += now[j] * 1n
        }
    }
    now = [...dp]
}
for(let i = 0 ; i <10 ; i++){
    result += dp[i]
}
console.log(String(result%1000000000n))