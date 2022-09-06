let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = new Array(input+1).fill(0)
let way = new Array(input+1).fill(0)

for(let i = 2 ; i <= input ; i++){
    dp[i] = dp[i-1] +1
    if(i % 2 === 0){
        dp[i] = Math.min(dp[i], dp[i/2] + 1)
    }
    if(i % 3 === 0){
        dp[i] = Math.min(dp[i] , dp[i/3] + 1)
    }
    if(dp[i]-1 === dp[i/3]){
        way[i] = i/3        
    }
    else if(dp[i]-1 === dp[i/2]){
        way[i] = i/2
    }
    else{
        way[i] = i-1
    }
}

let result = [input]
let now = way[input]

while(now){
    result.push(now)
    now = way[now]
}

console.log(dp[input])
console.log(result.join(' '))