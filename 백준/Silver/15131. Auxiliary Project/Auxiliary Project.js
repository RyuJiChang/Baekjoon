const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let arr = [[1,2],[7,3],[4,4],[5,5],[9,6],[8,7]]
let dp = new Array(input+1).fill(0)

for(let i = 0 ; i < arr.length ; i++){
    let [a,b] = arr[i]
    for(let j = 1 ; j <= input ; j++){
        if(j >= b){
            if(!dp[j-b]&& b%j){
                continue
            }
            dp[j] = Math.max(dp[j-b] + a , dp[j])
        }
    }
}

console.log(dp[input])