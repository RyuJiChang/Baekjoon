const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number)
let arr = input.slice(1).sort((a,b) => a-b)
let san = 0
let jun = arr[Math.floor(arr.length/2)]
let cho
let bem = arr[arr.length-1] - arr[0]
let obj = {}
let max 
let maxArr = []
for(let i = 0 ; i < arr.length ; i++){
    san += arr[i];
    obj[arr[i]] === undefined ? (obj[arr[i]] = 1):(obj[arr[i]] += 1);
}
for(let key in obj){
    if(max === undefined){
        max = obj[key]
    }
    if(max < obj[key]){
        max = obj[key]
    }
}
for(let key in obj){
    if(max === obj[key]){
        maxArr.push(key)
        cho = key
    }
}
cho = maxArr.sort((a,b)=>a-b)[1] !== undefined ? maxArr.sort((a,b)=>a-b)[1] : maxArr.sort((a,b)=>a-b)[0]
console.log(Math.round(san/arr.length) === -0? 0 : Math.round(san/arr.length))
console.log(jun)
console.log(cho)
console.log(bem)