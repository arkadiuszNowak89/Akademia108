function countDown(collection, start = 0) {
  const par = collection;
  const limit = collection.length;
  let i = start;
  console.log(par);

  par.eq(i).fadeIn(500, function () {
    if (i + 1 === limit) return;
    par.eq(i).fadeOut(500, function () {
      i++;
      if (i < limit) {
        countDown(collection, i);
      }
    });
  });
}

const par = $('p').hide();
countDown(par);
