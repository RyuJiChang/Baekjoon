const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [height, width, customers] = input[i].split(' ').map(Number)
    let floor, roomOrder
    if(height === 1){
        floor = 1
        roomOrder = customers
    }
    else{
        floor = (customers-1)%height+1
        roomOrder = Math.floor((customers-1)/height)+1
        
    }
    result.push(`${floor}${roomOrder < 10 ? '0' + roomOrder : roomOrder}`)
}

console.log(result.join('\n'))