let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 2 ; i < input.length ; i += 2){
    let arr = input[i].split(' ').map(Number)
    if(arr.length === 1){
        let a = []
        a.push(`Data Set ${i/2}:`)
        a.push(arr[0])
        a.push('')
        result.push(a.join('\n'))
        continue
    }
    let dp = [arr[0] , Math.max(arr[0],arr[1])]
    for(let j = 2 ; j < arr.length ; j++){
        dp[j] = Math.max(dp[j-1] , dp[j-2]+arr[j])
    }
    let a = []
    a.push(`Data Set ${i/2}:`)
    a.push(dp[arr.length-1])
    a.push('')
    result.push(a.join('\n'))
}
console.log(result.join('\n').trim())