const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
if(input < 100){
    console.log(99)
}
else{
    let min = Math.floor(input/100)*100 -1
    let max = Math.floor(input/100)*100 + 99
    if(max - input <= input - min){
        console.log(max)
    }
    else{
        console.log(min)
    }
}