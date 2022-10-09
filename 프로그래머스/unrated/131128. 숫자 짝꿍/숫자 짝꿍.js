function solution(X, Y) {
    let arr = []
    let arrX = new Array(10).fill(0)
    let arrY = new Array(10).fill(0)
    for(let i = 0 ; i < X.length ; i++){
        arrX[Number(X[i])]++
    }
    for(let i = 0 ; i < Y.length ; i++){
        arrY[Number(Y[i])]++
    }
    for(let i = 0 ; i < 10 ; i++){
        for(let j = 0 ; j < Math.min(arrX[i],arrY[i]) ; j++){
            arr.push(i)
        }
    }
    arr.sort((a,b) => b-a).join('')
    if(arr.length === 0){
        return "-1"
    }
    if(arr[0] === 0){
        return "0"
    }
    return arr.join('')
}