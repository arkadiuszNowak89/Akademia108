function sqSum(arr) {
  const resolve = arr.reduce((acc, val) => (acc += Math.pow(val, 2)), 0);
  console.log(resolve);
}

sqSum([0, 1, 2, 3, 4, 5]);
