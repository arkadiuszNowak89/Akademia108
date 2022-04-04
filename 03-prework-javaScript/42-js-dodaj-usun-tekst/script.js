btnAdd = document.querySelector("#dodaj");
btnRemove = document.querySelector("#usun");
txtEl = document.querySelector("#tekst");

btnAdd.onclick = () => txtEl.classList.remove("hidden");
btnRemove.onclick = () => txtEl.classList.add("hidden");
