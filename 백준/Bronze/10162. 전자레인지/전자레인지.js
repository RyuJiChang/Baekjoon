let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let a = Math.floor(input/300)
let b = Math.floor((input%300)/60)
let c = Math.floor((input%60)/10)


if(input%10){
    console.log(-1)
}
else{
    console.log(a,b,c)
}