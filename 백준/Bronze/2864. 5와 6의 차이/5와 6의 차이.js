const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el.padStart(7,'0'))

let max = 0
let min = 0

for(let i = 0 ; i < 7 ; i++){
    max *= 10
    min *= 10
    if(num1[i] === '5' && num2[i] === '5'){    
        max += 12  
    }
    else if(num1[i] === '5'){
        max += (6 + Number(num2[i]))
    }
    else if(num2[i] === '5'){       
        max += Number(num1[i]) + 6
    }
    else{
        max += Number(num1[i]) + Number(num2[i])
    }
    
    if(num1[i] === '6' && num2[i] === '6'){    
        min += 10
    }
    else if(num1[i] === '6'){
        min += 5 + Number(num2[i])
    }
    else if(num2[i] === '6'){       
        min += Number(num1[i]) + 5
    }
    else{
        min += Number(num1[i]) + Number(num2[i])
    }
}

console.log(min, max)