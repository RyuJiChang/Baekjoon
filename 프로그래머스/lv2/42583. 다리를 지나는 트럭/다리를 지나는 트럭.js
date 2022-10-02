function solution(bridge_length, weight, truck_weights) {
    let sec = 1;
    let aa = truck_weights.shift();
    let nowWeight = aa
    let sum = aa
    let waitting = new Array(bridge_length).fill(0)
    waitting[bridge_length-1] = aa
    
    while(sum > 0){
        sec++
        sum -= waitting.shift()
        if(truck_weights.length === 0){
            continue
        }
        else if(sum + truck_weights[0] <= weight){
            nowWeight = truck_weights.shift()
            sum += nowWeight
            waitting.push(nowWeight)
        }
        else{
            waitting.push(0)
        }
    }
    
    return sec;
}

//1.nowWeight를 통해 다리 위 현재 무게와 weight 비교하기
//2.무게 제한이라면 0을 push하기
//3.마지막 트럭이었다면 0을 push하지 않기
//4.while은 대기트럭, 다리를 건너는 트럭의 length가 0이 아닌 경우에 돌아가게 하기(생각해보니 waitting의 앞부분을 채워서 watting만 봐도 될 것 같다.)
//5.한바퀴 돌 때마다 1초가 지났다고 감안하고 sec을 선언 후 ++로 경과시간 처리하기

//생각해보니 sum + 0번째값이 들어가지 않는다면 sum.indexOf를 통해 index를 찾아서 0의 갯수만큼 밀어버리는 작업이 있으면 더 빠를 것 같다.
//index와 차이만큼 sum에 더해주면 되고? nowWeight와 sum이 같은 결말이면 뺴줘야 하니 이 부분도 index처리가 맞는데 일단 제출해보고
