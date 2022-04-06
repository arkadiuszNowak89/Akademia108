const jsonPracownicy = {
  pracownicy: [
    { firstName: "Krystian", lastName: "Dziopa" },
    { firstName: "Anna", lastName: "Szapiel" },
    { firstName: "Piotr", lastName: "Żmuda" },
  ],
};

console.log(jsonPracownicy);
jsonPracownicy.pracownicy.forEach((el, i) => {
  const { firstName, lastName } = el;
  console.log(`${i}. ${firstName} ${lastName}`);
});
