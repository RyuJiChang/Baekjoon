let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input.slice(1)
for(let i = 0 ; i < n ; i++){
    arr[i] = arr[i].split(' ').map(Number)
}
let dp = []
for(let i = 0 ; i < n ; i++){
    dp.push(new Array(n).fill(1000000))
}
dp[0][0]=0

for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        if(i === n-1 && j === n-1){
        }
        else if(i === n-1){
            if(arr[i][j] > arr[i][j+1]){
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j])
            }
            else{
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+arr[i][j+1]+1-arr[i][j])
            }
        }
        else if( j === n-1){
            if(arr[i][j] > arr[i+1][j]){
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j])
            }
            else{
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+arr[i+1][j]+1-arr[i][j])
            }
            
        }
        else{
            if(arr[i][j] > arr[i][j+1] && arr[i][j] > arr[i+1][j]){
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j])
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j])
            }
            else if(arr[i][j] > arr[i][j+1]){
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j])
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+arr[i+1][j]+1-arr[i][j])
            }
            else if(arr[i][j] > arr[i+1][j]){
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+arr[i][j+1]+1-arr[i][j])
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j])
            }
            else{
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+arr[i][j+1]+1-arr[i][j])
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+arr[i+1][j]+1-arr[i][j])
            }
        }
    }
}
console.log(dp[n-1][n-1])