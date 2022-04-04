const calc = function (n1, n2) {
  if (n1 + n2 >= 0) console.log(`"Wynik dodawania wynosi ${n1 + n2}"`);
  else console.log("Wynik jest nieprawidłowy");

  if (n1 - n2 >= 0) console.log(`"Wynik odejmowania wynosi ${n1 - n2}"`);
  else console.log("Wynik jest nieprawidłowy");

  if (n1 * n2 >= 0) console.log(`"Wynik mnożenia wynosi ${n1 * n2}"`);
  else console.log("Wynik jest nieprawidłowy");
};

calc(15, -16);
