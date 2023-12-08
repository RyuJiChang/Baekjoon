const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log('-'.repeat(input.indexOf('U')) + 'U' + 'C'.repeat(input.lastIndexOf('F') - input.indexOf('U') - 1) + 'F' + '-'.repeat(input.length - input.lastIndexOf('F') - 1) )
