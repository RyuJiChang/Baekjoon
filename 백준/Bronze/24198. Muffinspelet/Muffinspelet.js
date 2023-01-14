let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let Alf = 0
let Beara = 0
let switching = true
while(input){
    let half = Math.round(input/2)
    input -= half
    if(switching){
        Beara += half
    }
    else{
        Alf += half
    }
    switching = !switching
}

console.log(Alf,Beara)