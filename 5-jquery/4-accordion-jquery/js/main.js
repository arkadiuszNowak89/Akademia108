$('.accordion').on('click', function (e) {
  const elJQ = $(e.target).closest('.accordion-item');
  if (!elJQ.length) return;

  elJQ.children('.accordion-content').toggle(500);
  elJQ.children('.accordion-title').toggleClass('open');
});
