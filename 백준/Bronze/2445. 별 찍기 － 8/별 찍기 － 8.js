const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = ''
function star(num) {
    let result = ''
    for(let i = 0 ; i < num ; i++){
        result += '*'
    }
    return result
}

function blank(num) {
    let result = ''
    for(let i = 0 ; i < num ; i++){
        result += `  `
    }
    return result    
}
for(let i = 1 ; i <= input ; i++){
    result +=`${star(i)}${blank(input-i)}${star(i)}\n`
}
for(let i = input-1 ; i >= 1 ; i--){
    result +=`${star(i)}${blank(input-i)}${star(i)}\n`
}

console.log(result)