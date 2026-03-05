const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input >= 1000000){
    console.log(input * 0.2, input* 0.8)
}
else if(input >= 500000){
    console.log(input * 0.15, input* 0.85)
}
else if(input >= 100000){
    console.log(input * 0.1, input* 0.9)
}
else{
    console.log(input * 0.05, input* 0.95)
}