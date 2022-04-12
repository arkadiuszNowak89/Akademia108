const btnJQ = $('.btn-get-data');
const btnJQ_2 = $('.btn-get-data-2');
const contJQ = $('.cont');

btnJQ.on('click', function () {
  $.get('https://akademia108.pl/api/ajax/get-post.php', (data) => {
    for (key in data) {
      contJQ.append(`<p><strong>${key}:</strong> ${data[`${key}`]}</p>`);
    }
  }).fail((err) => console.log(err.statusText, ': wrong url'));
});

btnJQ_2.on('click', function () {
  $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    .done((data) => {
      for (key in data) {
        contJQ.append(`<p><strong>${key}:</strong> ${data[`${key}`]}</p>`);
      }
    })
    .fail((err) => console.log(err.statusText, ': wrong url'));
});
