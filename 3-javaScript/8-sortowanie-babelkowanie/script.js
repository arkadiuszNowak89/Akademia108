const input = [
  12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1,
];

function bubbleSort(arr) {
  const res = [...arr];

  res.forEach(() => {
    res.forEach((el, i) => {
      if (el > res[i + 1]) {
        // res[i] = res[i + 1];
        // res[i + 1] = el;
        [res[i], res[i + 1]] = [res[i + 1], el];
      }
    });
  });

  return res;
}

console.log(bubbleSort(input));
