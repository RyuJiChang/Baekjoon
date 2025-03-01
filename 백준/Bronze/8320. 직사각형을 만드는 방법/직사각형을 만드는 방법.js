const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const set = new Set();

for(let i = 1 ; i <= input ; i++){
    for(let j = 1 ; i * j <= input ; j++){
        if(i < j){
            set.add(`${i} ${j}`)
        }
        else{
            set.add(`${j} ${i}`)
        }
    }
}

console.log(set.size)