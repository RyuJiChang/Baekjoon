const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = new Array(input+1).fill(0)
dp[0] = 0 
dp[1] = 0    
dp[2] = 1
dp[3] = 0
dp[4] = 1
dp[5] = 1 
for(let i = 5 ; i <= input ; i++){
    if(!dp[i-1] || !dp[i-3] || !dp[i-4]){
        dp[i] = 1
    }
}

if(dp[input]){
    console.log('SK')
}
else{
    console.log('CY')
}
