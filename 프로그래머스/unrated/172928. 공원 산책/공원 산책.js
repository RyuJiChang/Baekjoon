function solution(park, routes) {
    const xLimit = park.length-1
    const yLimit = park[0].length-1
    let x
    let y
    
    //이동 가능 확인
    const routeCheck = (order, distance) => {
        if(order === 'N'){
            if(x - distance < 0) return
            else{
                for(let i = x ; i >= x-distance ; i--){
                    if(park[i][y] === 'X') return
                }
            }
            x -= distance
        }
        else if(order === 'S'){
            if(x + distance > xLimit) return
            else{
                for(let i = x ; i <= x+distance ; i++){
                    if(park[i][y] === 'X') return
                }
            }
            x += distance
        }
        else if(order === 'W'){
            if(y - distance < 0) return
            else{
                for(let i = y ; i >= y-distance ; i--){
                    if(park[x][i] === 'X') return
                }
            }
            y -= distance
        }
        else if(order === 'E'){
            if(y + distance > yLimit) return
            else{
                for(let i = y ; i <= y+distance ; i++){
                    if(park[x][i] === 'X') return
                }
            }
            y += distance
        }
    }
    
    //S찾기
    for(let i = 0 ; i <= xLimit ; i++){
        for(let j = 0 ; j <= yLimit ; j++){
            if(park[i][j] === 'S'){
                x = i
                y = j
            }
        }
    }
    
    //좌표이동
    for(let i = 0 ; i < routes.length ; i++){
        const order = routes[i][0]
        const distance = Number(routes[i][2])
        routeCheck(order, distance)
    }
    
    return [x,y];
}
//1.S찾기
//2.해당 좌표로 이동해도 범위가 벗어나지 않는지 체크와 장애물 있는지 확인 후 없으면 이동
//3.최종 좌표값 출력