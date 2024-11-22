const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

for(let i = 1 ; i <= input ; i++){
    console.log(`Hello World, Judge ${i}!`)
}