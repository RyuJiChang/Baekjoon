function solution(land) {
    var answer = 0;
    for(let i = 1 ; i < land.length ; i++){
        for(let j = 0 ; j < 4 ; j++){
            if(j === 0){
                land[i][0] += Math.max(land[i-1][1],land[i-1][2],land[i-1][3])
            }
            else if(j === 1){
                 land[i][1] += Math.max(land[i-1][0],land[i-1][2],land[i-1][3])
            }
            else if(j === 2){
                 land[i][2] += Math.max(land[i-1][0],land[i-1][1],land[i-1][3])
            }
            else{
                 land[i][3] += Math.max(land[i-1][0],land[i-1][1],land[i-1][2])
            }
        }
    }
    // return land
    return Math.max(...land[land.length-1]);
}