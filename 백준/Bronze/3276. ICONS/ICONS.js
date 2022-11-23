let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let x = 1
let y = 1

while(input > x*y){
    x+=1
    if(input <= x*y){
        break
    }
    y+=1
}

console.log(x,y)