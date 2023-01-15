let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let [amount, startStr] = input[i].split(' ')
    let triangles = []
    for(let j = 1 ; j <= Number(amount) ; j++){
        triangles.push(String.fromCharCode((startStr.charCodeAt()-66+j)%26 +65).repeat(j))
    }
    result.push(triangles.join('\n'))
}


console.log(result.join('\n\n'))