function solution(dots) {
    let arr = [[0,1,2,3],[0,2,1,3],[0,3,1,2]]
    for(let i = 0 ; i < 3 ; i++){
        let [a,b,c,d] = arr[i]
        if((dots[a][0]-dots[b][0])/(dots[a][1]-dots[b][1]) === (dots[c][0]-dots[d][0])/(dots[c][1]-dots[d][1]) || (dots[a][1]-dots[b][1])/(dots[a][0]-dots[b][0]) === (dots[c][1]-dots[d][1])/(dots[c][0]-dots[d][0])){
           return 1
        }
    }
    return 0
}