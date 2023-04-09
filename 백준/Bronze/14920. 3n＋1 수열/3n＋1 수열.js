let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 1


while(input > 1){
    if(input % 2){
        input = input*3 + 1
    }
    else{
        input /= 2
    }
    count++
}

console.log(count)