let num1 = 142;
let num2 = 23;

function getBigger(x, y) {
  return [x, y].sort((a, b) => a - b).at(-1);
}

console.log(getBigger(num1, num2));
