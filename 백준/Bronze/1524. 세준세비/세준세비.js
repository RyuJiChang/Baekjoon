const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 3 ; i <= input.length ; i+=4){
    const arr1 = input[i].split(' ').map(Number).sort((a,b) => b-a)
    const arr2 = input[i+1].split(' ').map(Number).sort((a,b) => b-a)
    while(arr1.length > 0  && arr2.length > 0){
        if(arr1[arr1.length-1] >= arr2[arr2.length-1]){
            arr2.pop()
        }
        else{
            arr1.pop()
        }
    }

    if(arr1.length > arr2.length){
        result.push('S')
    }
    else if(arr1.length < arr2.length){
        result.push('B')
    }
    else{
        result.push('C')
    }
}

console.log(result.join('\n'))