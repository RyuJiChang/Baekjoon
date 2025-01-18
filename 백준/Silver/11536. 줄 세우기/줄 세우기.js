const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  input.shift(); // 첫 번째 줄 제거

  const increaseArr = [...input].sort().join('');
  const decreaseArr = [...input].sort().reverse().join('');

  if (input.join('') === increaseArr) {
    console.log('INCREASING');
  } else if (input.join('') === decreaseArr) {
    console.log('DECREASING');
  } else {
    console.log('NEITHER');
  }
});