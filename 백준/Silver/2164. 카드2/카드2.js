const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let nums = []

for(let i = 1 ; i <= input ; i++){
    nums.push(i)
}

while(nums.length > 1){
    const condition = nums.length
    nums = nums.filter((el,index) => index%2) 
    if(condition % 2){
        nums.push(nums.shift())
    }
}

console.log(nums[0])