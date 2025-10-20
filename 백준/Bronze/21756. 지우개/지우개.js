const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let arr = []

for(let i = 1 ; i <= input ; i++){
    arr.push(i)
}

while (arr.length > 1) {
    for(let i = 0 ; i < arr.length ; i++){
        if(i%2 == 0){
            arr[i] = 0
        }
    }
    arr = arr.filter(el => el != 0)
}

console.log(arr[0])