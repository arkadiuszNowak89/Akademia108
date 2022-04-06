class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  }
  opiszKsiazke() {
    return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${
      this.przeczytana ? "została" : "nie została"
    } przeczytana.`;
  }
}

const ksiazka1 = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", true);
const ksiazka2 = new Ksiazka("Atlas Zbuntowany", "Ayn Rand", false);
const ksiazka3 = new Ksiazka("Diuna", "Frank Herbert", false);

const ksiazkiTab = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tab) {
  let qty = 0;
  tab.forEach((el) => {
    if (el.przeczytana) qty++;
    console.log(el.opiszKsiazke());
  });
  return qty;
}

console.log(`Ilość przeczytanych książek: ${iloscPrzeczytanych(ksiazkiTab)}`);
