const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

for(let i = input ; i > 0 ; i--){
    console.log('*'.repeat(i))
}
