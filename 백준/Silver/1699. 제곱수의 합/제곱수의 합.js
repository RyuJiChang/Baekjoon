const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = []
let arr = []

for(let i = 2 ; i < 318 ; i++){
    arr[i-2] = i*i
}

for(let i = 0 ; i <= input ; i++){
    dp[i] = i
}

for(let i = 0 ; i < arr.length ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(j >= arr[i]){
            dp[j] = Math.min(dp[j-arr[i]]+1 ,dp[j])
        }
    }
}

console.log(dp[input])