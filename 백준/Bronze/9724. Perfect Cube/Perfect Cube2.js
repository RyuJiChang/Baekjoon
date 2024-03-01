const input = `10
1 2000000000
42 1011
170 1254
963 2504
282 2430
996 4262
392 2361
293 3308
719 8614
772 5458`.split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i].split(' ').map(Number)
    let count = 0
    for(let j = 1 ; j**3 <= end ; j++){
        if(j**3 >= start){
            count++   
        }
    }
    result.push(`Case #${i}: ${count}`)
}

console.log(result.join('\n'))
