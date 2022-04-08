const btnOne = $('button').eq(0);
const btnTwo = $('button').eq(1);

btnOne.on('click', function () {
  const last = $('p').last();
  $('p').first().before(last);
});

btnTwo.on('click', function () {
  const first = $('p').first();
  $('p').last().after(first);
});
