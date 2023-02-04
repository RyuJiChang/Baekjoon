const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const searchArr = input[1].split(' ').map(Number).sort((a,b) => a-b)
const wantToFind = input[3].split(' ').map(Number)
const result = []

const isNumberExist = (num) => {
    let left = 0
    let right = searchArr.length-1
    while(left <= right){
        const middle = Math.floor((left+right)/2)
        if(searchArr[middle] === num){
            return 1
        }
        else if(searchArr[middle] > num){
            right = middle - 1
        }
        else{
            left = middle + 1
        }
    }
    return 0
     
}

wantToFind.forEach(el => result.push(isNumberExist(el)))
console.log(result.join('\n'))