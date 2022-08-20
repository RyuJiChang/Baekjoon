const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let arr = [1,2,5,7]
let dp = []
for(let i = 0 ; i <= input ; i++){
    dp[i] = i
}

for(let i = 1 ; i < arr.length ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(j >= arr[i]){
            dp[j] = Math.min(dp[j-arr[i]]+1 ,dp[j])
        }
    }
}

console.log(dp[input])
