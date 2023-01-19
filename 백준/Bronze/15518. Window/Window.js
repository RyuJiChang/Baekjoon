let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [range, height, width] = input[0].split(' ').map(Number)
let moveArr = input[1].split(' ').map(Number)
let windowArr = []

for(let i = 0 ; i < range*width ; i++){
    if(Math.floor(i/width)%2){
        windowArr.push(2)    
    }
    else{
        windowArr.push(1)
    }
}

for(let i = 0 ; i < range*width ; i++){
    if(Math.floor(i/width)%2){
        windowArr[i] -= 2
        windowArr[i-moveArr[Math.floor(i/width)]] += 2
    }
    else{
        windowArr[i] -= 1
        windowArr[i+moveArr[Math.floor(i/width)]] += 1
    }
}

console.log(windowArr.filter(el => el === 3).length*height)