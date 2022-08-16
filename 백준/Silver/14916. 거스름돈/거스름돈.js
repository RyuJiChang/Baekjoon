const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result
let patten = [0, 2, 1, 3, 2]
if(input === 1 || input === 3){
    result = -1
}
else if(input === 2){
    result = 1
}
else if(input === 4){
    result = 2
}
else if(input >= 5){
    result = Math.floor(input/5)+patten[input%5]
}
console.log(result)