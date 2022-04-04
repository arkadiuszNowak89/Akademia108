const desEl = document.querySelector("#opis");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  desEl.textContent = "Description prolongs the button";
});
