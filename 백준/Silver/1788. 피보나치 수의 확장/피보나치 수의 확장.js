const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [0,1]

for(let i = 2 ; i<= Math.abs(input) ; i++){
   dp[i] = (dp[i-2] + dp[i-1])%1000000000
} 

if(input === 0 ){
    console.log(0)
    console.log(0)
}
    
else if(input > 0){
    console.log(1)
    console.log(dp[input])
}
else if(input < 0){
    if(input % 2){
        console.log(1)
        console.log(dp[Math.abs(input)])
    }
    else{
        console.log(-1)
        console.log(dp[Math.abs(input)])
    }
}