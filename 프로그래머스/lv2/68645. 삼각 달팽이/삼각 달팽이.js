function solution(n) {
    let answer = []
    let arrs = []
    let now = 1
    let a = -1
    let b = 0
    for(let i = 1 ; i <= n ; i++){
        arrs.push(new Array(i).fill(0))
    }
    let way = n
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n-i ; j++){
            if(i%3 === 0){
                a += 1
                arrs[a][b] = now
                now++
            }
            else if(i%3 === 1){
                b += 1
                arrs[a][b] = now
                now++
            }
            else{
                a -= 1
                b -= 1
                arrs[a][b] = now
                now++
            }
        }
    }
    for(let i = 0 ; i < arrs.length ; i++){
        for(let j = 0 ; j < arrs[i].length ; j++){
            answer.push(arrs[i][j])
        }
    }
    return answer;
}