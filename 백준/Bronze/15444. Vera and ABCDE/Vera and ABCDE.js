const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const map = {
    'A' : '****.*****.**.*',
    'B' : '****.*****.****',
    'C' : '****..*..*..***',
    'D' : '****.**.**.****',
    'E' : '****..****..***'
}

let line1 = ''
let line2 = ''
let line3 = ''
let line4 = ''
let line5 = ''

for(let i = 0 ; i < input.length ; i++){
    for(let j = 0 ; j < 15 ; j++){
        if(j < 3){
            line1 += map[input[i]][j]
        }
        else if(j < 6){
            line2 += map[input[i]][j]
        }
        else if(j < 9){
            line3 += map[input[i]][j]
        }
        else if(j < 12){
            line4 += map[input[i]][j]
        }
        else{
            line5 += map[input[i]][j]
        }
    }
}

console.log(line1)
console.log(line2)
console.log(line3)
console.log(line4)
console.log(line5)