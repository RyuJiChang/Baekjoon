const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let max = 0
let person = ''

for(let i = 1 ; i < input.length ; i++){
    const[salary, name, contry] = input[i].split(' ')
    if(contry == 'Russia' && Number(salary) > max){
        max = Number(salary)
        person = name
    }
}
console.log(person)