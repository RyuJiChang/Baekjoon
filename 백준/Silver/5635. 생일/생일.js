const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const num = Number(input[0])
let max = input[1]
let min = input[1]
for(let i = 1 ; i <= num ; i++){
    if(Number(input[i].split(' ')[3]) === Number(max.split(' ')[3])){
        if(Number(input[i].split(' ')[2]) === Number(max.split(' ')[2])){
            if(Number(input[i].split(' ')[1]) < Number(max.split(' ')[1])){
               max = input[i]
        }
        }
        else{
            if(Number(input[i].split(' ')[2]) < Number(max.split(' ')[2])){
               max = input[i]
        }
        }
    }
    else{
        if(Number(input[i].split(' ')[3]) < Number(max.split(' ')[3])){
            max = input[i]
        }
    }

    
    if(Number(input[i].split(' ')[3]) === Number(min.split(' ')[3])){
        if(Number(input[i].split(' ')[2]) === Number(min.split(' ')[2])){
            if(Number(input[i].split(' ')[1]) > Number(min.split(' ')[1])){
               min = input[i]
        }
        }
        else{
            if(Number(input[i].split(' ')[2]) > Number(min.split(' ')[2])){
               min = input[i]
        }
        }
    }
    else{
        if(Number(input[i].split(' ')[3]) > Number(min.split(' ')[3])){
            min = input[i]
        }
    }
    
}
console.log(min.split(' ')[0])
console.log(max.split(' ')[0])