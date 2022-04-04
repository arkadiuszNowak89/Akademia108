function check(n) {
  return `Liczba ${
    n >= 100 && n <= 200 ? "" : "nie "
  }znajduje się w przedziale`;
}

console.log(check(201));
