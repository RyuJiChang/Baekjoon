function solution(people, limit) {
    let obj = {}
    let count = 0
    for(let i = 40 ; i <= limit ; i++){ // obj에 0 초기값 설정
        obj[i] = 0
    }
    for(let i = 0 ; i < people.length ; i++){ // obj에 해당 무게 인원 증가
        obj[people[i]]++
    }
    for(let i = 40 ; i <= limit ; i++){ // obj 순회로 무게 0 만들수 있는지 확인하기
        if(obj[i] === 0){ // 현재 해당무게 인원이 없으면 통과
            continue
        }
        else{
            for(let j = limit ; j >= i ; j--){ //i무게가 있는 경우 역순으로 무게 제거할 사람 구해오기
                if(obj[j] === 0 || i+j > limit){ // j가 0명이거나 i+j의 무게가 한도 초과라면 무시
                }
                else if(j === i){ // 만약 너무 내려와서 현재값까지 내려왔다면 count에 /2로 처리해 추가해주기
                     if(obj[i]%2){
                       count += Math.ceil(obj[i]/2) // 홀수인 경우
                        obj[i] = 0
                    }
                    else{
                        count += obj[i]/2
                        obj[i] = 0
                    }
                }
                else{
                    if(obj[i] === 0){
                    }
                    else if(obj[i] < obj[j]){
                        count += obj[i]
                        obj[j] -= obj[i]
                        obj[i] = 0
                    }
                    else{
                        count += obj[j]
                        obj[i] -= obj[j]
                        obj[j] = 0
                    }
                }
            }
        }
    }

    for(let key in obj){
        count += obj[key]
    }
    return count
}
