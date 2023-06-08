```js

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let sum = 0

for(let i = 0 ; i < input.length ; i++){

    sum += Math.max(40, input[i])

}

console.log(sum/5)

```

예비군 훈련으로 인한 자체 등록
