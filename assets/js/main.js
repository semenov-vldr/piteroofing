
const accordionList = document.querySelectorAll('.accordion');

if (accordionList) accordionList.forEach(accordion => createAccordion(accordion));


function createAccordion (accordion) {
  const accordionItems = accordion.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');
  const removeClass = (item) => item.classList.remove('js-accordion-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', function ()  {
      accordionItems.forEach(item => (item !== this) ? removeClass(item) : false);
      toggleClass(this);
    });
  });
}

const header = document.querySelector('header.header');

if (header) {

  const headerBurger = header.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    header.classList.toggle('js-menu-open');
    toggleScrollBody();
  });


  // scroll
  window.addEventListener('scroll', () => scrollHeader (header) );

}

const excursions = document.querySelector('.excursions');

if (excursions) {

  const excursionsCards = excursions.querySelectorAll('.excursions__card');

  excursionsCards.forEach(excursionsCard => {
    const popup = excursionsCard.querySelector('.popup-excursion');

    function activePopup () {
      popup.classList.add('js-popup-open');
      excursionsCard.addEventListener('click', onDocumentClick);

      excursionsCard.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup-excursion__close')) {
          closePopup();
        }
      });
    };

    function closePopup () {
      popup.classList.remove('js-popup-open');
    };

    function onDocumentClick (evt) {
      if (evt.target.classList.contains('popup-excursion')) {
        closePopup();
      }
    };

    excursionsCard.addEventListener('click', activePopup);


  })

}



// Params
let mainSliderSelector = '.main-slider';

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed: 1000,

  parallax: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loopAdditionalSlides: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    // init: function(){
    //   this.autoplay.stop();
    // },
    imagesReady: function(){
      this.el.classList.remove('loading');
      this.autoplay.start();
    },
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);



const main = document.querySelector('main');
if (main) {
  const heroIndex = main.querySelector('.hero-index');
  if (heroIndex) {
    const header = document.querySelector('.header');
    main.style.paddingTop = header.offsetHeight + 'px';

    window.addEventListener('resize', () => {
      main.style.paddingTop = header.offsetHeight + 'px';
    })
  }
}



const html = document.querySelector('html');

const classBlockScroll = 'js-blockScroll';


function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

function toggleScrollBody () {
  html.classList.toggle(classBlockScroll);
};

let previousPosition = document.documentElement.scrollTop;
function scrollHeader (header) {
  let currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
  } else {
    header.classList.add('js-scroll');
  }
  previousPosition = currentPosition;
}
