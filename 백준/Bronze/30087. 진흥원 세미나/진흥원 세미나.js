const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {'Algorithm':'204',
'DataAnalysis' :'207',
'ArtificialIntelligence':'302',
'CyberSecurity':'B101',
'Network':'303',
'Startup':'501',
'TestStrategy':'105'}
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(map[input[i]])
}

console.log(result.join('\n'))