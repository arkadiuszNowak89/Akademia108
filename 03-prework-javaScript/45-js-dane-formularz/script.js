const btn = document.querySelector("#btn-confirm");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputsArr = Array.from(document.querySelectorAll("input")).map(
    (el) => el.id
  );

  inputsArr.forEach((item) => {
    document.querySelector(`p[id="${item}"]`).textContent =
      document.querySelector(`input[id="${item}"]`).value;
  });
});
