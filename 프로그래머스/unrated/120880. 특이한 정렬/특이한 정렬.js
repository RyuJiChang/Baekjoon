function solution(numlist, n) {
    let arr = []
    for(let i = 0 ; i < numlist.length ; i++){
        arr.push([numlist[i], Math.abs(numlist[i]-n)])
    }
    arr.sort((a,b) => b[0] - a[0])
    arr.sort((a,b) => a[1] - b[1])
    return arr.map(el => el[0])
}