//////////////
// References
const container = document.querySelector(".container");
const form = document.querySelector("form");
const allNodesEl = form.children;
const [errorList, inputName, inputEmail, checkAll, check1, check2] = [
  allNodesEl[0],
  allNodesEl[2],
  allNodesEl[4],
  allNodesEl[5].children[0],
  allNodesEl[6].children[0],
  allNodesEl[7].children[0],
];

/////////////
// Functions
function displayError(txt) {
  const info = document.createElement("li");
  info.innerText = txt;
  info.classList.add("warning");
  errorList.append(info);
}

function validate(e) {
  e.preventDefault();
  errorList.innerHTML = "";

  if (!inputName.value) {
    displayError("Puste pole z imieniem!");
  }

  if (!inputEmail.value) {
    displayError("Pole email jest puste!");
  } else if (!inputEmail.value.includes("@")) {
    displayError('Brak symbolu "@"');
  }

  if (!check1.checked) {
    displayError("Zgoda 1 jest obowiązkowa!");
  }
}

function allCheck() {
  check1.checked = checkAll.checked;
  check1.disabled = checkAll.checked;
  check2.checked = checkAll.checked;
  check2.disabled = checkAll.checked;
}

//////////////////
// Event handlers
form.addEventListener("submit", validate);
checkAll.addEventListener("click", allCheck);
