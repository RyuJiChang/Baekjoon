const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0].split(' ')[1])
let numArr = input.slice(1).map(Number).sort((a,b) => a-b)

let left = 1
let right = numArr[numArr.length-1]
let middle= Math.floor((left+right)/2)

function cal(m){
	let result = 0
	for(let i = 0 ; i < numArr.length ; i++){
	result += Math.floor(numArr[i]/m)
	}
	return result
}

while(left <= right){
    if(cal(middle) >= n && cal(middle+1) < n){
        console.log(middle)
        break
    }
    if(cal(middle) >= n ){
        left = middle +1
    }    
    else{
     right = middle -1   
    }
    middle = Math.floor((left+right)/2)
}