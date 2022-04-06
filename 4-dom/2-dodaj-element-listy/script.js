function addEl() {
  const list = document.querySelector("#items");
  const i = list.children.length;
  const markup = `<li>Item ${i + 1}</li>`;
  list.insertAdjacentHTML("beforeend", markup);
}

document.querySelector("button").addEventListener("click", addEl);
