const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const vowel = {
    'a' : 1,
    'e' : 1,
    'i' : 1,
    'o' : 1,
    'u' : 1
}

for(let i = 1 ; i < input.length ; i++){
    const str = input[i].split(' ').join('').toLowerCase()
    let vowelCount = 0
    let consonantCount = 0

    for(let j = 0 ; j < str.length ; j++){
        if(vowel[str[j]]){
            vowelCount++
        }
        else{
            consonantCount++
        }
    }
    console.log(consonantCount, vowelCount)
}