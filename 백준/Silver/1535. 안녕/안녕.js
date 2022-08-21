const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let dp = []
let hpArr = input[1].split(' ').map(Number)
let happyArr = input[2].split(' ').map(Number)
let hp = 99
for(let i = 0 ; i <= hp ; i++){
    dp[i] = 0
}

for(let i = 0 ; i <= hpArr.length ; i++){
    for(let j = hp ; j >= 1 ; j--){
        if(j >= hpArr[i]){
            dp[j] = Math.max(dp[j] , dp[j-hpArr[i]] + happyArr[i])
    }
}
}

console.log(dp[hp])
    