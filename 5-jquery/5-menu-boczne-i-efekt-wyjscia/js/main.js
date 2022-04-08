$('.hamburger').on('click', function () {
  $('.main-menu').toggleClass('open');
});

$('.main-menu-item a').on('click', function (e) {
  e.preventDefault();
  $('.out-animation-wrapper').fadeOut(
    2000,
    function () {
      window.location.href = $(this).attr('href');
    }.bind(this)
  );
});
