const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [0,1,0,1,1]

for(let i = 5 ; i <= input ; i++){
    if(!dp[i-1] || !dp[i-3] || !dp[i-4]){
        dp[i] = 1
    }
    else{
        dp[i] = 0
    }
}
if(dp[input]){
    console.log('SK')
}
else{
   console.log('CY')
}