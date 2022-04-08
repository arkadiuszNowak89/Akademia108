const summaryEl = $('#sum');
let summary = 0;

$('#count-sum').on('click', function () {
  $('.salary').each(function () {
    summary += +$(this).text();
  });
  summaryEl.text(summary);
});
