function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = [] 
    let map2 = []
    for(let i = 0 ; i < n ; i++){
        answer.push(new Array().fill())
        map1.push(('0'.repeat(n)+arr1[i].toString(2)).slice(-n).split('').map(Number))
        map2.push(('0'.repeat(n)+arr2[i].toString(2)).slice(-n).split('').map(Number))
    }
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            if(map1[i][j] === 0 && map2[i][j] === 0){
                answer[i].push(' ')
            }
            else{
                answer[i].push('#')
            }
        }
        answer[i] = answer[i].join('')
    }
    return answer;
}