let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let nums = [1]
let now = 2

while(now <= input){
    nums.push(now)
    now *= 2
}

let dp = new Array(input+1).fill(0)
dp[0] = 1

for(let i = 0 ; i < nums.length ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(nums[i] <= j){
            dp[j] = (dp[j] + dp[j-nums[i]])%1000000000
        }
        
    }
}
console.log(dp[input])