const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const map = {
    '11' : 'Habb Yakk',
    '22' : 'Dobara',
    '33' : 'Dousa',
    '44' : 'Dorgy',
    '55' : 'Dabash',
    '65' : 'Sheesh Beesh',
    '66' : 'Dosh',
    '1' : "Yakk",
    '2' : "Doh",
    '3' : "Seh",
    '4' : "Ghar",
    '5' : "Bang",
    '6' : "Sheesh"
}

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].sort((a,b) => b - a)
    if(map[x + y]){
        result.push(`Case ${i}: ${map[x + y]}`)
    }
    else{
        result.push(`Case ${i}: ${map[x]} ${map[y]}`)
    }
}

console.log(result.join('\n'))