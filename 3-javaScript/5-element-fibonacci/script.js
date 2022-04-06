const fibonacci = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr.at(-1);
};

console.log(fibonacci(12));


stock
heap

eventloop
? loop

API