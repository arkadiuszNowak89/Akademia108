// console.log(document.querySelector('h1'));

// const lastChild = $('li').last();
// const firstChild = $('li').first();
// const fourthChild = $('li').eq(4);
// const notChild = $('li').not('.middle');

// // console.log(lastChild, firstChild, fourthChild, notChild);

// const checkBox = $(':checkbox').not(':checked');

// // console.log(checkBox);

// const list = document.querySelector('ul');

// const markup = '<li class="item">Nowy element 1 (oldschool)</li>';
// list.insertAdjacentHTML('beforeend', markup);

// const newEl = $('<li class="item">Nowy element 2 (jQ)</li>');
// $('ul').append(newEl);

// $('ul').append('<li class="item">Nowy <span>element 2</span> (jQ 2)</li>');
// $('span').css('font-weight', 'bold');

// //------------------------------

// console.log($('h1').addClass('header'));

// // Nie działają stare metody
// const listJQ = $('ul').addClass('lista lista-gen');
// console.log(list.classList, listJQ.classList);
// console.log(listJQ.attr('class'));

// // Tak działają
// console.log(listJQ[0].classList);

// ///////////////////////////////////

// // Oddaje tylko atrybut pierwszego obiektu!!!
// console.log($('li').attr('class'));
// console.log($('li').eq(6).attr('class'));

// forEach ? => each
// $('li').each(function (i, el) {
//   console.log(i, el);
//   console.log(this.classList); // js
//   console.log($(this).attr('class')); // jq
// });

// //////////////////////////////////

// const unknown = $('button');
// const newElement = $('<button>but1</button>');
// console.log(unknown);
// console.log(newElement);

////////////////////////////////

// $('h1').hide(1000).show(1000).hide(500).show(300).hide(100).show(50);
// $('h1').fadeOut(1000).fadeIn(1000);

$('.second-h').hide();
$('.btn-show').on('click', function () {
  if ($('.second-h').css('display') === 'none') {
    $('.first-h').fadeOut(1000, function () {
      $('.second-h').fadeIn(1000);
    });
  } else {
    $('.second-h').fadeOut(1000, function () {
      $('.first-h').fadeIn(1000);
    });
  }
});

// Animacja wieloetapowa

function animateMany(collection, start = 0) {
  const par = collection;
  const limit = collection.length - 1;
  let i = start;

  par.eq(i).fadeOut(1000, function () {
    par.eq(i + 1).fadeIn(1000, function () {
      i++;
      if (i < limit) {
        animateMany(collection, i);
      }
    });
  });
}

// const elements = $('p');
// elements.not($('p').eq(0)).hide();
// animateMany(elements);

//Animacja wieloetapowa 2

function animateMany2(collection, start = 0) {
  const par = collection;
  const limit = collection.length;
  let i = start;
  console.log(par);

  par.eq(i).fadeIn(1000, function () {
    if (i + 1 === limit) return;
    par.eq(i).fadeOut(1000, function () {
      i++;
      if (i < limit) {
        animateMany2(collection, i);
      }
    });
  });
}

const elements2 = $('p').hide();
animateMany2(elements2);

// Animacja niestandardowa

$('h3').animate({ opacity: 0.3, fontSize: '3em' }, 1000, function () {
  $('h3').animate({ opacity: 1, fontSize: '4em' }, 1000, function () {
    $(this).after('<p>Animacja zakończona</p>');
  });
});
