let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
for(let i = 0 ; i < 5 ; i++){
    let a
    if(i%2){
        a = '@'
    }
    else{
        a = ' '
    }
    for(let j = 0 ; j < input ; j++){
        console.log(`${'@'.repeat(input)}${a.repeat(input*3)}${'@'.repeat(input)}`)
    }
}
