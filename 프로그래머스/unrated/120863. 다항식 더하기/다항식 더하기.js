function solution(polynomial) {
    let arr = polynomial.split(' + ')
    let x = 0
    let num = 0
    for(let i = 0 ; i < arr.length ; i++){
        if( arr[i][0] === 'x'){
            x += 1
        }
        else if(arr[i].slice(-1) === 'x'){
            x += Number(arr[i].slice(0,arr[i].length-1))
        }
        else{
            num += Number(arr[i])
        }
    }
    if(x === 1 && num === 0){
        return `x`
    }
    if(x === 1){
        return `x + ${num}`
    }
    if(num === 0){
        return `${x}x`
    }
    if(x === 0){
        return `${num}`
    }
    return `${x}x + ${num}`
}