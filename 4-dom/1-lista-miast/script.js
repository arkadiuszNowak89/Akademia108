let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokio",
  "Moscow",
];

function createListElement(city) {
  const li = document.createElement("li");
  li.innerText = city;
  li.classList.add("city");
  return li;
}
function createList(arrCities) {
  const ol = document.createElement("ol");
  arrCities.forEach((city) => ol.append(createListElement(city)));
  return ol;
}

document.querySelector("body").append(createList(cities));
