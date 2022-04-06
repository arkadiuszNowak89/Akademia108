function act(x, y, z) {
  const res = x * y * z;
  return res;
}
const globalRes = act(2, 4, 6);
console.log(globalRes);
