const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

for(let i = 1 ; i <= input ; i++){
    console.log(`${' '.repeat(input-i)}${'*'.repeat(i)}`)
}
for(let i = input-1 ; i > 0 ; i--){
    console.log(`${' '.repeat(input-i)}${'*'.repeat(i)}`)
}