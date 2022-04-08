const btnJQ = $('button');
const squareJQ = $('div');
squareJQ.css('position', 'relative');

squareJQ.css({ width: '200px', height: '200px', backgroundColor: 'red' });
btnJQ.on('click', function () {
  squareJQ.animate(
    { left: '+=100px', width: '100px', height: '100px' },
    1000,
    function () {
      squareJQ.animate({ backgroundColor: 'blue' }, 1000, function () {
        squareJQ.html('<h2>Animacja zakończona</h2>');
        $('div h2').css({ fontSize: '15px' });
      });
    }
  );
});
