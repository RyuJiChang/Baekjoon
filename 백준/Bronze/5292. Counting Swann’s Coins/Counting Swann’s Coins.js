const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
let str = ''
for(let i = 1 ; i <= input ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        str += ' DeadMan'
        result.push(str.trim())
        str = ''
    }
    else if(i % 3 == 0){
        str += ' Dead'
        result.push(str.trim())
        str = ''
    }
    else if(i % 5 == 0){
        str += ' Man'
        result.push(str.trim())
        str = ''
    }
    else{
        str += ' ' + i
    }
}
if(str){
    result.push(str.trim())
}

console.log(result.join('\n'))