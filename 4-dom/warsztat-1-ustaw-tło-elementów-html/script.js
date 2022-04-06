function setBackground() {
  ["red", "yellow"].forEach(
    (color, i) =>
      (document.querySelector("body").children[i].style.backgroundColor = color)
  );
}

document.querySelector("button").addEventListener("click", setBackground);
