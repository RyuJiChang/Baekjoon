function solution(maps) {
    var answer = -1;
    let aMax = maps.length-1
    let bMax = maps[0].length-1
    let queue = [[0,0,1]]
    
    while(queue.length !== 0){
        let [a,b,length] = queue.shift()
        maps[a][b] = 0
        if(a === aMax && b === bMax){
            answer = length
            break
        }
        if(a-1 >= 0 && maps[a-1][b]){//위
            queue.push([a-1,b,length+1])
            maps[a-1][b] = 0
        }
        if(a+1 <= aMax && maps[a+1][b]){//아래
            queue.push([a+1,b,length+1])
            maps[a+1][b] = 0
        }
        if(b-1 >= 0 && maps[a][b-1]){//왼쪽
            queue.push([a,b-1,length+1])
            maps[a][b-1] = 0
        }
        if(b+1 <= bMax && maps[a][b+1]){//오른쪽
            queue.push([a,b+1,length+1])
            maps[a][b+1] = 0
        }
    }
    return answer;
}