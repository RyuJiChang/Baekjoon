const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const arr = [0,1,0,0]

const change = (str) => {
    if(str == 'A'){
        let temp = arr[1]
        arr[1] = arr[2]
        arr[2] = temp
    }
    else if(str == 'B'){
        let temp = arr[2]
        arr[2] = arr[3]
        arr[3] = temp
    }
    else if(str == 'C'){
        let temp = arr[1]
        arr[1] = arr[3]
        arr[3] = temp
    }
}
for(let i = 0 ; i < input.length ; i++){
    change(input[i])
}

for(let key in arr){
    if(arr[key]){
        console.log(key)
    }
}