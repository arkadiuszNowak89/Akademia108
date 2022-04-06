function calc(arr = []) {
  const suma = arr.reduce((acc, val) => (acc += val), 0);
  const iloczyn = arr.reduce((acc, val) => (acc *= val), 1);

  console.log(suma);
  console.log(iloczyn);
}

calc([1, 2, 3, 4, 5, 6]);
