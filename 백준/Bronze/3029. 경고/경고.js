let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let secArr = []
let result
for(let i = 0 ; i < 2 ; i++){
    let [h,m,s] = input[i].split(':').map(Number)
    secArr.push(h*3600 + m*60 +s)
}
let [start, end] = secArr
if(start >= end){
    result = end+86400-start 
}
else{
    result = end-start
}

console.log(`${Math.floor(result/3600) < 10 ? '0'+Math.floor(result/3600) : Math.floor(result/3600)}:${Math.floor((result%3600)/60) < 10 ? '0' + Math.floor((result%3600)/60) : Math.floor((result%3600)/60) }:${result%60 < 10 ? '0' + result%60 : result%60}`)