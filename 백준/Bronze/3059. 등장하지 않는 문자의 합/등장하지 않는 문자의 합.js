const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let result = []
    for(let i = 1 ; i < input.length ; i++){
        let arr = new Array(26).fill(1)
        let sum = 0 
        for(let j = 0 ; j < input[i].length ; j++){
            if(arr[input[i][j].charCodeAt()-65]){
                arr[input[i][j].charCodeAt()-65] = 0
            }
        }
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]){
                sum += i+65
            }
        }
        
        result.push(sum)
    }
    
    console.log(result.join('\n'))
  process.exit();
});
