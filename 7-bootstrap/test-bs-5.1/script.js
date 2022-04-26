const myCarousel = document.querySelector('#myCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
});

carousel.to(2);

// drugi sposób:

myCarousel.dataset.bsInterval = 200;
console.log(myCarousel.dataset);
