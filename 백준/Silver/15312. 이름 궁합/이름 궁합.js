const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let str = ''
let nums = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
let dp = [1n,1n]
let result1 = BigInt(0)
let result2 = BigInt(0)

for(let i = 0 ; i < input[0].length ; i++){
    str += input[0][i] + input[1][i]
}
for(let i = 2 ; i < str.length ; i++){
    dp[i] = dp[i-1]*BigInt(i) 
}

for(let i = 0 ; i < str.length-1 ; i++){
    result1 += (BigInt(nums[str.charCodeAt(i)-65]) * dp[str.length-2] / dp[str.length-2 -i] / dp[i]) 
}

for(let i = 1 ; i < str.length ; i++){
    result2 += (BigInt(nums[str.charCodeAt(i)-65]) *dp[str.length-2] / dp[str.length-1 -i] / dp[i-1])
}

result1 = String(result1)
result2 = String(result2)

console.log(result1.slice(-1) + result2.slice(-1))