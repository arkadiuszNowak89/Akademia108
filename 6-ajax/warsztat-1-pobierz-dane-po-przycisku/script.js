const btn = document.querySelector('.btn-get-data');
btn.addEventListener('click', getData);

async function getData() {
  try {
    const res = await fetch('https://akademia108.pl/api/ajax/get-post.php', {
      method: 'GET',
    });
    const data = await res.json();
    btn.after(createResultsEl(data));
  } catch (err) {
    console.log(err.message);
  }
}

function createResultsEl(data) {
  const cont = document.createElement('div');
  for (el of Object.entries(data)) {
    cont.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${el[0]}:</strong> ${el[1]}<p>`
    );
  }
  return cont;
}
