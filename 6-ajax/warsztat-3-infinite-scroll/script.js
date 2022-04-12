//////////
// Config

const ANIM_TIME = 300;
const LOAD_DATA_DELAY = 1000;

////////////////
// Animate dots

const dotsJQ = $('.dot');
const dotsContJQ = $('.dots');
const paramsIn = {
  color: 'black',
};
const paramsOut = {
  color: 'rgb(172, 172, 172)',
};

function runAnimation(t) {
  if (dotsContJQ.hasClass('hidden')) return;
  dotsJQ.eq(0).animate(paramsIn, t, () => {
    dotsJQ.eq(0).animate(paramsOut, t - 100);
    dotsJQ.eq(1).animate(paramsIn, t, () => {
      dotsJQ.eq(1).animate(paramsOut, t - 100);
      dotsJQ.eq(2).animate(paramsIn, t, () => {
        dotsJQ.eq(2).animate(paramsOut, t - 100);
        runAnimation(t);
      });
    });
  });
}

function animateDots(flag = true) {
  if (flag) {
    dotsContJQ.removeClass('hidden');
    runAnimation(ANIM_TIME);
  }
  if (!flag) {
    dotsContJQ.addClass('hidden');
  }
}

///////////////////////////
// Scroll bottom observing

const observePoint = document.querySelector('.observe-point');

const obsOptions = {
  root: null,
  treshold: 0,
  rootMargin: '0px',
};

function reachObsPoint(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  animateDots();
  observer.unobserve(observePoint);
  setTimeout(loadNewData, LOAD_DATA_DELAY);
}

const observer = new IntersectionObserver(reachObsPoint, obsOptions);
observer.observe(observePoint);

/////////////////
// Load new data

const mainCont = document.querySelector('.infinite');

function loadNewData() {
  fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then((res) => res.json())
    .then((data) => {
      mainCont.insertAdjacentHTML('beforeend', createMarkup(data));
      animateDots(false);
      observer.observe(observePoint);
    })
    .catch((err) => console.log(err.message));
}

function createMarkup(data) {
  let markup = '';

  data.forEach((el) => {
    markup += `
    <p>User ID: ${el.id}</p>
    <p>User Name: ${el.name}</p>
    <p>User URL: ${el.website}<br />--------</p>
    `;
  });
  return markup;
}
