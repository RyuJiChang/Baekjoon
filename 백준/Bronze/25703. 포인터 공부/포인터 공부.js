const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = ['int a;', 'int *ptr = &a;']

for(let i = 2 ; i <= input ; i++){
    result.push(`int ${'*'.repeat(i)}ptr${i} = &ptr${i-1 == 1 ? ''  : i-1};`)
}

console.log(result.join('\n'))