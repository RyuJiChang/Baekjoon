const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const counts = Number(input[i])
    let max = 0
    let school = ''

    for(let j = i + 1 ; j <= i + counts ; j++){
        const [S, num] = input[j].split(' ')
        if(max < num * 1){
            max = num * 1
            school = S
        }
    }
    console.log(school)
    
    i += counts
}