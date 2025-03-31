const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const sortedList = (input.pop()).sort((a,b) => a-b)
const [x, y]     = input.pop()
const result     = []



const recurtion = (list, index) => {
    if(list.length == y){
        result.push(list.join(' '))
        return
    }
    if(index == x){
        return
    }
    for(let i = index ; i < x ; i++){
        recurtion([...list, sortedList[i]], i + 1)
    }
}

recurtion([], 0)
console.log(result.join('\n'))